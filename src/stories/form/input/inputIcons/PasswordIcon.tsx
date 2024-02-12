import { EyeFill, EyeSlash } from "react-bootstrap-icons";
import { Button } from "../../../button/Button";
import { aqBootstrapTheme } from "../../../theme/defaultTheme";
import { InputArgs } from "../types";

const PasswordIcon = ({
  type,
  setType,
  i18n,
}: {
  type: string;
  setType: (value: InputArgs["type"]) => void;
  i18n?: {
    showPassword?: string;
    hidePassword?: string;
  };
}) => {
  return (
    <span className={`input-group-button`}>
      {type === "text" ? (
        <Button
          title={
            i18n && i18n.hidePassword ? i18n.hidePassword : "Hide password"
          }
          size="sm"
          type="button"
          kind="transparent"
          onClick={() => setType("password")}
        >
          <EyeSlash color={aqBootstrapTheme.variants.primary} />
        </Button>
      ) : (
        <Button
          title={
            i18n && i18n.showPassword ? i18n.showPassword : "Show password"
          }
          size="sm"
          type="button"
          kind="transparent"
          onClick={() => setType("text")}
        >
          <EyeFill color={aqBootstrapTheme.variants.primary} />
        </Button>
      )}
    </span>
  );
};

export default PasswordIcon;
