import { ChangeEvent, useEffect, useReducer, useState } from "react";
import ReactSelect, { ActionMeta, InputActionMeta } from "react-select";
import Creatable from "react-select/creatable";
import { aqTheme, customComponents, customStyle } from "./_styles";

import FormLabel from "../form/formlabel/FormLabel";
import {
  GetOptionsAsync,
  Option,
  OptionAction,
  OptionActionType,
  SelectProps,
} from "./_types";

function updateOptions(state: Option[], action: OptionAction): Option[] {
  const { type, payload } = action;
  switch (type) {
    case "set": {
      return Array.isArray(payload) ? payload : [payload];
    }
    case "add": {
      return Array.isArray(payload)
        ? [...state, ...payload]
        : [...state, payload];
    }
    case "reset": {
      return [];
    }
  }
}

let searchBuffer = "";

export const Select = ({
  label,
  name,
  onBlur,
  onChange,
  value,
  options,
  defaultValue,
  placeholder = "Search",
  isMulti,
  isDisabled,
  isLoading,
  isClearable = true,
  isSearchable,
  menuTargetQuery,
  onCreate,
  menuPlacement,
  formatCreateLabel,
  noOptionsMessage,
  ...props
}: SelectProps) => {
  const [loading, setLoading] = useState(isLoading);
  const [searching, setSearching] = useState<string | false>(false);
  const [page, setPage] = useState(0);
  const [thereIsMore, setMore] = useState(false);
  const [optionsArray, setOptions] = useReducer(updateOptions, []);
  const [initialOptions, setInitialOptions] = useState<{
    more: boolean;
    results: Option[];
  }>({ more: true, results: [] });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (thereIsMore) {
      triggerUpdate();
    }
  }, [page]);

  useEffect(() => {
    if (options instanceof Array) {
      setOptions({ type: "set", payload: options });
    } else {
      setLoading(true);
      getAsyncRes(options, 0).then((res) => {
        setInitialOptions(res);
        setLoading(false);
      });
    }
  }, [options]);

  const triggerUpdate = () => {
    if (options instanceof Function) {
      setLoading(true);
      setAsyncRes("add", options, page).finally(() => {
        setLoading(false);
      });
    }
  };

  const getAsyncRes = async (fn: GetOptionsAsync, start: number) => {
    return await fn(start);
  };

  const setAsyncRes = async (
    type: OptionActionType,
    fn: GetOptionsAsync,
    start: number,
    search?: string,
  ) => {
    const res = await fn(start, search);
    setMore(res.more);
    setOptions({ type: type, payload: res.results });
  };

  useEffect(() => {
    if (!initialOptions.results.length) return;
    setOptions({ type: "set", payload: initialOptions.results });
    setMore(initialOptions.more);
  }, [initialOptions]);

  const handleInputChange = (value: string, actionMeta: InputActionMeta) => {
    if (options instanceof Function) {
      searchBuffer = value;
      setSearching(value);
      setTimeout(function () {
        if (searchBuffer.length >= 2) {
          setLoading(true);
          setAsyncRes("set", options, 0, searchBuffer).finally(() => {
            setLoading(false);
          });
        } else {
          setOptions({ type: "set", payload: initialOptions.results });
          setMore(initialOptions.more);
        }
      }, 800);
    }
  };

  const handleChange = (value: any, actionMeta: ActionMeta<any>) => {
    if (options instanceof Function) {
      if (typeof searching === "string" && searching.length >= 2) {
        resetOptions();
      }
    }
    // usecase: select places autocomplete
    if (onChange) onChange(value);
  };

  const handleBlur = (e: ChangeEvent) => {
    if (searching) {
      resetOptions();
    }
    setSearching(false);
    setLoading(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const resetOptions = () => {
    setOptions({ type: "reset", payload: [] });
    setMore(true);
    setPage((page) => {
      if (page === 0) {
        triggerUpdate();
      }
      return 0;
    });
  };

  const onMenuScrollToBottom = () => {
    if (thereIsMore) setPage((page) => page + 1); // this is not the updated value of thereIsMore untill rerender :((
  };

  useEffect(() => {
    if (loading) {
      setOptions({
        type: "add",
        payload: {
          value: "loading-placeholder",
          label: "Loading data",
          isDisabled: true,
        },
      });
    } else if (
      searching &&
      typeof searching === "string" &&
      searching.length < 2
    ) {
      setOptions({
        type: "add",
        payload: {
          value: "search-placeholder",
          label: "Please write at list 2 characters to load more results",
          isDisabled: true,
        },
      });
    }
  }, [isLoading, searching]);

  const handleValue = (): Option[] | Option => {
    return optionsArray.filter((opt) => {
      if (Array.isArray(value)) {
        return value.filter((v) => v.value == opt.value).length > 0;
      }
      return opt.value === value.value;
    });
  };

  const args = {
    id: name,
    name: name,
    value: handleValue(),
    menuPortalTarget: menuTargetQuery
      ? document.querySelector<HTMLElement>(menuTargetQuery)
      : undefined,
    onBlur: handleBlur,
    onChange: handleChange,
    onInputChange: handleInputChange,
    options: optionsArray,
    defaultValue: defaultValue,
    placeholder: placeholder,
    isDisabled: isDisabled,
    isLoading: loading,
    isClearable: isClearable,
    isSearchable: isSearchable,
    styles: customStyle,
    isMulti: isMulti,
    maxMenuHeight: 200,
    captureMenuScroll: true,
    menuPlacement: menuPlacement,
    onMenuScrollToBottom: onMenuScrollToBottom,
    menuShouldScrollIntoView: true,
    theme: aqTheme,
    noOptionsMessage,
    ...customComponents,
  };
  return (
    <>
      {label && (
        <FormLabel isDisabled={isDisabled} htmlFor={name} label={label} />
      )}
      <div {...props}>
        {onCreate ? (
          <Creatable
            {...args}
            formatCreateLabel={formatCreateLabel}
            onCreateOption={(value) => {
              onCreate(value);
              setOptions({
                type: "add",
                payload: [{ value: value, label: value }],
              });
            }}
          />
        ) : (
          <ReactSelect {...args} />
        )}
      </div>
    </>
  );
};
