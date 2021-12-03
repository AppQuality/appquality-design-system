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
  isDisabled?: boolean;
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
  margin-bottom: ${(props) => props.theme.grid.sizes[2]};
  color: ${(props) => props.theme.palette.primaryVariant};
  ${(props) =>
    props.isDisabled ? `color: ${props.theme.colors.disabledFont};` : ""}
  .form-icon {
    line-height: 1;
    float: right;
  }
`;

export default FormLabel;
