# smart-form

Angular form builder

# Description

The idea is to make a reusable form component that receives data in this format and render a form

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
