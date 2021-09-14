import styled from "styled-components";

const BaseFormLabel = ({
  htmlFor,
  label,
  className,
  isDisabled,
}: {
  htmlFor: string;
  label: string;
  className?: string;
  isDisabled?: string;
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
};

const FormLabel = styled(BaseFormLabel)`
  order: -1;
  display: block;
  margin-bottom: 0.5rem;
  ${(props) =>
    props.isDisabled ? `color: ${props.theme.colors.disabledFont};` : ""}
  .form-icon {
    line-height: 1;
    float: right;
  }
`;

export default FormLabel;
