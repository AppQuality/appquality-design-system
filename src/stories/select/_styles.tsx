import { components, Styles, Theme } from "react-select";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { ChevronDown, X } from "react-bootstrap-icons";
import { borderRadius } from "react-select/src/theme";

const aqTheme = (theme: Theme) => ({
  borderRadius: aqBootstrapTheme.general.borderRadius,
  spacing: theme.spacing,
  colors: {
    ...theme.colors,
    primary: aqBootstrapTheme.palette.primary,
    primary25: aqBootstrapTheme.colors.gray300,
  },
});

const IndicatorSeparator = () => null;
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
  },
};

const customStyle: Styles<any, any> = {
  control: (provided, state) => {
    const borderColor = `${aqBootstrapTheme.colors.disabled}`;
    const boxShadow = "none";
    const lineHeight = "1.5";
    const minHeight = "39px";

    return {
      ...provided,
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
    const color = `${aqBootstrapTheme.palette.primary}`;
    const fontSize = "1.25rem";
    const transform = state.selectProps.menuIsOpen ? "rotate(180deg)" : "";

    return {
      ...provided,
      color,
      fontSize,
      transform,
    };
  },
  menu: (provided) => {
    const borderColor = `${aqBootstrapTheme.colors.disabled}`;
    const borderWidth = "1px";
    const borderStyle = "solid";
    const borderRadius = `${aqBootstrapTheme.general.borderRadius}px`;
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
  groupHeading: (provided) => {
    const fontFamily = `${aqBootstrapTheme.typography.fontFamily.mono}`;
    const fontWeight = aqBootstrapTheme.typography.fontWeight.light;
    const fontSize = `${aqBootstrapTheme.typography.fontSize.small}`;
    const color = `${aqBootstrapTheme.colors.disabledDark}`;

    return {
      ...provided,
      fontFamily,
      fontWeight,
      fontSize,
      color,
    };
  },
  noOptionsMessage: (provided) => {
    const color = `${aqBootstrapTheme.colors.disabled}`;

    return {
      ...provided,
      color,
    };
  },
  option: (provided, state) => {
    if (state.data.value == "loading-placeholder") {
      const color = `${aqBootstrapTheme.colors.disabled}`;
      const textAlign = "center";
      const background = "none";

      return {
        ...provided,
        color,
        textAlign,
        background,
      };
    }

    return provided;
  },
  placeholder: (provided, state) => {
    const color = `${aqBootstrapTheme.colors.gray500}`;
    const fontWeight = parseInt(
      `${aqBootstrapTheme.typography.fontWeight.light}`
    );
    const borderColor = `${aqBootstrapTheme.colors.disabled}`;

    return {
      ...provided,
      color,
      fontWeight,
    };
  },
};

export { aqTheme, customComponents, customStyle };
