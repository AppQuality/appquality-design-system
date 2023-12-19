import { EyeFill, EyeSlash } from "react-bootstrap-icons";
import { Button } from "../../../button/Button";

const PasswordIcon = ({
  type,
  setType,
  i18n,
}: {
  type: string;
  setType: (value: string) => void;
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
          htmlType="button"
          type="light"
          onClick={() => setType("password")}
        >
          <EyeSlash />
        </Button>
      ) : (
        <Button
          title={
            i18n && i18n.showPassword ? i18n.showPassword : "Show password"
          }
          size="sm"
          htmlType="button"
          type="light"
          onClick={() => setType("text")}
        >
          <EyeFill />
        </Button>
      )}
    </span>
  );
};

export default PasswordIcon;
