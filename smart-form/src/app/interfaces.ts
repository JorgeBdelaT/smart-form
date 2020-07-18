export interface FieldOptionsData {
  label: string;
  value: string | boolean;
  selected?: boolean;
}

export interface FieldData {
  label: string;
  key: string;
  value?: any;
  inputType: string;
  options?: FieldOptionsData[];
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  maxOptions?: number;
  minOptions?: number;
}

export interface ButtonData {
  label: string;
  action?: () => void;
  type: string;
}

export interface FormData {
  onSubmit: () => void;
  title?: string;
  fields: FieldData[];
  buttons: ButtonData[];
}
