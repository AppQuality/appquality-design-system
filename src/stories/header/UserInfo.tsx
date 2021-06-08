import { BoxArrowRight } from "react-bootstrap-icons";
import { Button } from "../button/Button";
import "./header.scss";
import React from "react";
import { UserInfoProps } from "./_types";
import Skeleton from "../skeleton/Skeleton";

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
          <div className="user-name">
            {user.name} {user.surname}{" "}
            <span className="user-id">(T{user.id})</span>
          </div>
          <Button size="medium" type="link" onClick={onLogout}>
            <span className="text-danger">
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
