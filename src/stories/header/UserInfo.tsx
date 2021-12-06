import { BoxArrowRight } from "react-bootstrap-icons";
import { Button } from "../button/Button";
import { Skeleton } from "../skeleton/Skeleton";
import { Text } from "../typography/Typography";
import { UserInfoProps } from "./_types";

export const UserInfo = ({
  loginText,
  user,
  isLoading,
  onLogin,
  onLogout,
}: UserInfoProps) => {
  if (isLoading)
    return (
      <Skeleton>
        <Skeleton.Item width="90px" height="1rem" className="aq-mr-2" />
      </Skeleton>
    );
  return (
    <div className="user-info">
      {user ? (
        <>
          <div className={`user-avatar ${user.verified ? "verified" : ""}`}>
            <img alt={user.name + " " + user.surname} src={user.image} />
          </div>
          <Text as="div" className="user-name">
            {user.name} {user.surname}{" "}
            <Text as="span" className="aq-text-primaryVariant user-id">
              <b>T{user.id}</b>
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
