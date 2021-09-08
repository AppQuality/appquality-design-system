import { BaseProps } from "../../shared/_types";
import styled from "styled-components";

export interface WizardProps extends BaseProps {
  active: string;
}

const StyledWizard = styled.div`
  display: flex;
`;

export const Wizard = ({ active }: WizardProps) => {
  return (
    <StyledWizard>
      <div>
        <div>step 1</div>
      </div>
      <div></div>
    </StyledWizard>
  );
};

const Step = ({ children }: BaseProps) => {
  return {
    children,
  };
};

Wizard.Step = Step;
