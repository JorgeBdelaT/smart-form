# smart-form

Angular form builder

# Description

The idea is to make a reusable form component that receives data in the format detailed belllow and renders a form. Then, when the form is submitted, it retrieves all the form data for user manipulation.

```typescript
export interface FieldOptionsData {
  label: string;
  value: string | boolean;
  selected?: boolean;
}

interface FieldData {
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

interface ButtonData {
  label?: string; // 'Submit' by default
  action?: () => void; // only if it is not submit type
  type: string;
}

interface FormData {
  title?: string; // empty by default
  fields: FieldData[];
  buttons?: ButtonData[]; // by default a Submit button is generated
}
```

# Input Components

I would like to create 7 input types with the following validation options:
1. text-input
     - required, default false
     - minLength, default null
     - maxLength, default null
     - pattern, default null
  
2. password-input
     - required, default false
     - minLength, default null
     - maxLength, default null
     - pattern, default null
     
3. email-input
     - required, default false
     - minLength, default null
     - maxLength, default null
     - pattern, default null
     
4. select-input
     - required, default false

5. radio-button-input
     - required, default false
     
6. multiple-select-input
     - required, default false
     - minOptions, default false
     - maxOptions, default false
     
7. checkbox-input
     - required, default false
     - minOptions, default false
     - maxOptions, default false
     
The first 3 uses the same component, but the `inputType` attribute set its behaviour.

So, the 5 input components that will be implemented in this version are:
1. PlainInputComponent   
2. SelectInputComponent 
3. RadioButtonInputComponent 
4. MultipleSelectInputComponent 
5. CheckboxInputComponent 

In future versions, I would like to include the following fields
1. Password registration
2. Date picker
3. Date range picker

## Input data example
```javascript
{
    title: 'Smart Form Demo',
    fields: [
      // text-input
      {
        label: 'Username',
        key: 'username',
        value: '',
        inputType: 'text',
        required: true,
        minLength: 4,
        maxLength: 10,
        pattern: /^[a-z0-9]+$/,
      },
      // password-input
      {
        label: 'Password',
        key: 'password',
        inputType: 'password',
        required: true,
        minLength: 6,
        maxLength: 20,
      },
      // email-input
      {
        label: 'Email',
        key: 'email',
        inputType: 'email',
        required: true,
      },
      // select-input
      {
        label: 'Country',
        key: 'country',
        required: true,
        inputType: 'select',
        options: [
          {
            label: 'Chile',
            value: 'cl',
          },
          {
            label: 'Argentina',
            value: 'arg',
          },
          {
            label: 'United States',
            value: 'us',
            // selected: true,
          },
        ],
      },
      // radio-button-input
      {
        label: 'Subscribe to newsletter?',
        key: 'newsletter',
        required: true,
        inputType: 'radio-button',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
            // selected: true,
          },
        ],
      },
      // multiple-select-input
      {
        label: 'Hobbies',
        key: 'hobbies',
        required: true,
        inputType: 'multiple-select',
        maxOptions: 2,
        minOptions: 1,
        options: [
          {
            label: 'Climbing',
            value: '1',
            // selected: true,
          },
          {
            label: 'Coding',
            value: '2',
            // selected: true,
          },
          {
            label: 'Biking',
            value: '3',
            // selected: true,
          },
        ],
      },
      // checkbox-input
      {
        label: 'Top 3 Programming Languages',
        key: 'favLang',
        required: true,
        inputType: 'checkbox',
        maxOptions: 3,
        minOptions: 1,
        options: [
          {
            label: 'C',
            value: '1',
            // selected: true,
          },
          {
            label: 'Javascript',
            value: '2',
            selected: true,
          },
          {
            label: 'Ruby',
            value: '3',
            // selected: true,
          },
          {
            label: 'Python',
            value: '4',
            // selected: true,
          },
          {
            label: 'Php',
            value: '5',
            // selected: true,
          },
          {
            label: 'Go',
            value: '6',
            // selected: true,
          },
        ],
      },
    ],
    buttons: [
      {
        label: 'Send',
        type: 'submit',
      },
      {
        label: 'Read more...',
        action: () => {
          console.log('reading a little bit more....');
        },
        type: 'text',
      },
    ],
  };
```