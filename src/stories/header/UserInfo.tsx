import { BoxArrowRight } from "react-bootstrap-icons";
import { Button } from "../button/Button";
import { UserInfoProps } from "./_types";
import Skeleton from "../skeleton/Skeleton";
import { Paragraph } from "../typography/Typography";

export const UserInfo = ({
  showLogin,
  user,
  isLoading,
  onLogin,
  onLogout,
}: UserInfoProps) => {
  if (isLoading) return <Skeleton />;
  return (
    <div className="user-info">
      {user ? (
        <>
          <div className={`user-avatar ${user.verified ? "verified" : ""}`}>
            <img alt={user.name + " " + user.surname} src={user.image} />
          </div>
          <Paragraph as="div" className="user-name">
            {user.name} {user.surname}{" "}
            <Paragraph as="span" small={true} className="user-id">
              (T{user.id})
            </Paragraph>
          </Paragraph>
          <Button size="medium" type="link" onClick={onLogout}>
            <span className="aq-text-danger">
              <BoxArrowRight />
            </span>
          </Button>
        </>
      ) : showLogin ? (
        <Button size="medium" type="link" onClick={onLogin}>
          login
        </Button>
      ) : null}
    </div>
  );
};
