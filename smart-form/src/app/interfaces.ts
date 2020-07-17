export interface FieldOptionsData {
  label: string;
  value: string | boolean;
  selected?: boolean;
}

export interface FieldData {
  label: string;
  key: string;
  value?: any;
  required: boolean;
  inputType: string;
  multiple?: boolean;
  options?: FieldOptionsData[];
}

export interface ButtonData {
  label: string;
  action?: () => void;
  type: string;
}

export interface FormData {
  // onSubmit: () => void;
  title?: string;
  fields: FieldData[];
  buttons: ButtonData[];
}
