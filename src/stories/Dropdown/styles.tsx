import { ChevronDown, X } from "react-bootstrap-icons";
import { Theme, components } from "react-select5";
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
  >,
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
  props: JSX.LibraryManagedAttributes<typeof components.MultiValueLabel, any>,
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
  props: JSX.LibraryManagedAttributes<typeof components.DropdownIndicator, any>,
) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown />
  </components.DropdownIndicator>
);
const ClearIndicator = (
  props: JSX.LibraryManagedAttributes<typeof components.DropdownIndicator, any>,
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

export { aqTheme, customComponents };
