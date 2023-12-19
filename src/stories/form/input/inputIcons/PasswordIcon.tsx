import { EyeFill, EyeSlash } from "react-bootstrap-icons";

const PasswordIcon = ({
  type,
  setType,
}: {
  type: string;
  setType: (value: string) => void;
}) => {
  return (
    <span className={`input-group-text`}>
      {type === "text" ? (
        <EyeSlash onClick={() => setType("password")} />
      ) : (
        <EyeFill onClick={() => setType("text")} />
      )}
    </span>
  );
};

export default PasswordIcon;
