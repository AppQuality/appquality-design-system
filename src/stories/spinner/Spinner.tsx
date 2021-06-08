import styled from "styled-components";
import "./spinner.scss";

export const SpinnerWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  min-height: 60vh;
`;
export const Spinner = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
