# smart-form

Angular form builder

# Description

The idea is to make a reusable form component that receives data in this format and renders a form

```json
{
  "onSubmit": "function",
  "fields": [
    {
      "label": "Username",
      "key": "username",
      "required": true,
      "inputType": "text"
    },
    {
      "label": "Password",
      "key": "password",
      "required": true,
      "inputType": "password"
    },
    {
      "label": "Email",
      "key": "email",
      "required": true,
      "inputType": "password"
    },
    {
      "label": "Country",
      "key": "country",
      "required": true,
      "inputType": "selector",
      "options": [
        {
          "label": "Chile",
          "value": "cl"
        },
        {
          "label": "Argentina",
          "value": "arg"
        }
      ]
    },
    {
      "label": "Subscribe to newsletter?",
      "key": "newsletter",
      "required": false,
      "inputType": "radio-button",
      "options": [
        {
          "label": "Yes",
          "value": true
        },
        {
          "label": "No",
          "value": false
        }
      ]
    }
  ],
  "buttons": [
    {
      "label": "Send",
      "action": "function",
      "type": "submit"
    },
    {
      "label": "Read more...",
      "action": "function",
      "type": "text"
    }
  ]
}
```

# Input Components

I would like to create 7 input types:
1. text-input
2. password-input
3. email-input
4. select-input
5. radio-button-input
6. multiple-select-input
7. checkbox-input

The first 3 uses the same component, but the `inputType` attribute set its behaviour.

So, the 5 input components that will be implemented in this version are:
1. PlainInputComponent (ready)
2. SelectInputComponent (ready)
3. RadioButtonInputComponent
4. MultipleSelectInputComponent
5. CheckboxInputComponent