type InputArgs = {
  id: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  autocomplete?: boolean;
  isInvalid?: boolean;
  extra?: any;
  i18n?: {
    showPassword?: string;
    hidePassword?: string;
  };
} & (
  | {
      type: "date";
      min?: string;
      max?: string;
      onChange?: ChangeEventHandler<HTMLInputElement>;
    }
  | {
      type: "password";
      onChange?: (val: string) => void;
    }
  | {
      type: "search";
      onChange?: (val: string) => void;
    }
  | {
      type: "text";
      onChange?: (val: string) => void;
    }
  | {
      type: "number";
      onChange?: (val: string) => void;
    }
);

export { InputArgs };
