import { CardProps } from "./CardProps";
import styled from "styled-components";
import { Title } from "../typography/Typography";

const BasicCard = ({
  children,
  title,
  shadow = false,
  className,
}: CardProps) => {
  let cardHeader = null;
  if (title) {
    cardHeader = (
      <div className="aq-card-header">
        <Title size="s" className="aq-card-title">
          {title}
        </Title>
      </div>
    );
  }
  return (
    <div className={`${className}${shadow ? " aq-card-shadow" : ""}`}>
      {cardHeader}
      <div className="aq-card-body">{children}</div>
    </div>
  );
};

export const Card = styled(BasicCard)`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.colors.white};
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;

  &.aq-card-shadow {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  }
  .aq-card-body {
    flex: 1 1 auto;
    padding: 16px;
  }
  .aq-card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .aq-card-header:first-child {
    border-radius: 4px 4px 0 0;
  }
  .aq-card-header {
    padding: 8px 16px;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
`;
