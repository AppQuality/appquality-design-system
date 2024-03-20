import { ChevronDown, X } from "react-bootstrap-icons";
import { Styles, Theme, components } from "react-select";
import { Pill } from "../pill/Pill";
import { aqBootstrapTheme } from "../theme/defaultTheme";

const aqTheme = (theme: Theme) => ({
  borderRadius: aqBootstrapTheme.general.borderRadiusNumber,
  spacing: theme.spacing,
  colors: {
    ...theme.colors,
    primary: aqBootstrapTheme.palette.primary,
    primary25: aqBootstrapTheme.colors.gray300,
  },
});

const IndicatorSeparator = () => null;
const MultiValueContainer = (
  props: JSX.LibraryManagedAttributes<
    typeof components.MultiValueContainer,
    any
  >
) => {
  return (
    <components.MultiValueContainer {...props}>
      <Pill
        type="secondary"
        title={props.data.label}
        flat
        style={{
          maxWidth: "100%",
        }}
      >
        <div style={{ display: "flex" }}>{props.children}</div>
      </Pill>
    </components.MultiValueContainer>
  );
};
const MultiValueLabel = (
  props: JSX.LibraryManagedAttributes<typeof components.MultiValueLabel, any>
) => {
  return (
    <span
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      {props.children}
    </span>
  );
};
const DropdownIndicator = (
  props: JSX.LibraryManagedAttributes<typeof components.DropdownIndicator, any>
) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown />
  </components.DropdownIndicator>
);
const ClearIndicator = (
  props: JSX.LibraryManagedAttributes<typeof components.DropdownIndicator, any>
) => (
  <components.ClearIndicator {...props}>
    <X />
  </components.ClearIndicator>
);
let customComponents = {
  components: {
    IndicatorSeparator,
    DropdownIndicator,
    ClearIndicator,
    MultiValueContainer,
    MultiValueLabel,
  },
};

const customStyle: Styles<any, any> = {
  control: (provided, state) => {
    let borderColor = aqBootstrapTheme.colors.elementGeneric;
    if (state.isFocused) {
      borderColor = aqBootstrapTheme.variants.secondary;
    }
    if (state.isDisabled && state.hasValue) {
      borderColor = aqBootstrapTheme.colors.gray100;
    }
    const boxShadow = "none";
    const lineHeight = "1.5";
    const minHeight = "39px";
    const background =
      state.isDisabled && state.hasValue
        ? `${aqBootstrapTheme.colors.gray100}`
        : `${aqBootstrapTheme.colors.white}`;

    return {
      ...provided,
      background,
      borderColor,
      minHeight,
      boxShadow,
      lineHeight,
      ":hover": {
        borderColor: borderColor,
      },
    };
  },
  dropdownIndicator: (provided, state) => {
    let color = aqBootstrapTheme.palette.primary;
    if (state.isDisabled && !state.hasValue) {
      color = aqBootstrapTheme.colors.disabledFont;
    }
    if (state.selectProps.menuIsOpen) {
      color = aqBootstrapTheme.palette.secondary;
    }
    const fontSize = "20px";
    const transform = state.selectProps.menuIsOpen ? "rotate(180deg)" : "";
    const cursor = "pointer";
    return {
      ...provided,
      color,
      fontSize,
      transform,
      cursor,
    };
  },
  menu: (provided) => {
    const borderColor = `${aqBootstrapTheme.colors.elementGeneric}`;
    const borderWidth = "1px";
    const borderStyle = "solid";
    const borderRadius = `${aqBootstrapTheme.general.borderRadius}`;
    const boxShadow = `${aqBootstrapTheme.general.boxShadow}`;

    return {
      ...provided,
      borderColor,
      borderRadius,
      borderWidth,
      borderStyle,
      boxShadow,
    };
  },
  menuPortal: (provided) => {
    const zIndex = "9999";
    return {
      ...provided,
      zIndex,
    };
  },
  groupHeading: (provided) => {
    const fontFamily = `${aqBootstrapTheme.typography.fontFamily.mono}`;
    const fontWeight = aqBootstrapTheme.typography.fontWeight.light;
    const fontSize = `${aqBootstrapTheme.typography.fontSize.small}`;
    const color = `${aqBootstrapTheme.palette.secondary}`;

    return {
      ...provided,
      fontFamily,
      fontWeight,
      fontSize,
      color,
    };
  },
  noOptionsMessage: (provided) => {
    const color = `${aqBootstrapTheme.colors.disabledFont}`;

    return {
      ...provided,
      color,
    };
  },
  option: (provided, state) => {
    const activeColor = aqBootstrapTheme.variants.secondary;
    const hoverColor = aqBootstrapTheme.colors.purple100;
    if (state.data.value === "loading-placeholder") {
      const color = `${aqBootstrapTheme.colors.disabledFont}`;
      const textAlign = "center";
      const background = "none";
      return {
        ...provided,
        color,
        textAlign,
        background,
      };
    }

    provided = {
      ...provided,
      ":hover": {
        background: hoverColor,
      },
    };
    // focused and not selected
    if (state.isFocused && !state.isSelected) {
      return {
        ...provided,
        background: hoverColor,
        ":active": {
          background: activeColor,
        },
      };
    }
    // selected
    if (state.isSelected) {
      return {
        ...provided,
        background: aqBootstrapTheme.variants.secondary,
        color: aqBootstrapTheme.palette.secondary,
        ":hover": {
          background: aqBootstrapTheme.variants.secondary,
          color: aqBootstrapTheme.palette.secondary,
        },
      };
    }

    return {
      ...provided,
      ":active": {
        background: activeColor,
      },
    };
  },
  placeholder: (provided, state) => {
    const color = state.isDisabled
      ? `${aqBootstrapTheme.colors.disabledFont}`
      : `${aqBootstrapTheme.colors.gray500}`;
    const fontWeight = parseInt(
      `${aqBootstrapTheme.typography.fontWeight.light}`
    );

    return {
      ...provided,
      color,
      fontWeight,
    };
  },
  singleValue: (provided, state) => {
    const color =
      state.isDisabled && state.hasValue
        ? aqBootstrapTheme.variants.primary
        : aqBootstrapTheme.palette.primary;
    return {
      ...provided,
      color,
    };
  },
  multiValue: (provided, state) => {
    const backgroundColor = `transparent`;

    return {
      ...provided,
      backgroundColor,
    };
  },
  multiValueRemove: (provided, state) => {
    const backgroundColor = aqBootstrapTheme.variants.secondary;
    const color = `${aqBootstrapTheme.colors.white}`;
    const borderRadius = `50%`;
    const float = "right";
    const padding = "0";
    const margin = "0 0 0 10px";
    const alignSelf = "center";
    const cursor = "pointer";

    return {
      ...provided,
      ":hover": {
        ...provided[":hover"],
        backgroundColor,
        color: aqBootstrapTheme.palette.secondary,
      },
      alignSelf,
      borderRadius,
      backgroundColor,
      float,
      padding,
      margin,
      color,
      cursor,
    };
  },
};

export { aqTheme, customComponents, customStyle };
