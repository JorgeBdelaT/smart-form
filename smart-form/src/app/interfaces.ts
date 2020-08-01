export interface FieldOptionsData {
  label: string;
  value: string | boolean;
  selected?: boolean;
}

export interface FieldData {
  label?: string; // if not provided the key will be capitalized and used
  key: string;
  value?: any; // empty value by default
  inputType?: string; // text by default
  options?: FieldOptionsData[]; // empty value by default
  required?: boolean; // false by default
  minLength?: number; // null by default
  maxLength?: number; // null by default
  pattern?: string; // null by default, only checks if inputType is email
  maxOptions?: number; // null by default
  minOptions?: number; // null by default
}

export interface ButtonData {
  label: string; // 'Submit' by default
}

export interface FormData {
  title?: string; // empty by default
  fields: FieldData[];
  button?: ButtonData; // by default a Submit button is generated
}
