import styled from "styled-components";

const BaseFormLabel = ({
  htmlFor,
  label,
  className,
}: {
  htmlFor: string;
  label: string;
  className?: string;
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
};

const FormLabel = styled(BaseFormLabel)`
  order: -1;
  margin-bottom: 0.5rem;
  .form-icon {
    line-height: 1;
    float: right;
  }
`;

export default FormLabel;
