import { BoxArrowRight } from "react-bootstrap-icons";
import { Button } from "../button/Button";
import { UserInfoProps } from "./_types";
import { Text } from "../typography/Typography";

export const UserInfo = ({
  loginText,
  user,
  isLoading,
  onLogin,
  onLogout,
}: UserInfoProps) => {
  return (
    <div className="user-info">
      {user ? (
        <>
          <div className={`user-avatar ${user.verified ? "verified" : ""}`}>
            <img alt={user.name + " " + user.surname} src={user.image} />
          </div>
          <Text as="div" className="user-name">
            {user.name} {user.surname}{" "}
            <Text as="span" small={true} className="user-id">
              (T{user.id})
            </Text>
          </Text>
          <Button size="medium" type="link" onClick={onLogout}>
            <span className="aq-text-danger">
              <BoxArrowRight />
            </span>
          </Button>
        </>
      ) : typeof onLogin !== "undefined" ? (
        <Button
          className="capitalize-first"
          size="medium"
          type="link"
          onClick={onLogin}
        >
          {loginText}
        </Button>
      ) : null}
    </div>
  );
};
