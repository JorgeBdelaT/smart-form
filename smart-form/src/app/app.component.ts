import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smart-form';
  mockInProgress = {
    title: 'Smart Form Demo',
    // onSubmit: () => {
    //   console.log('submiting form');
    // },
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
        action: () => {
          console.log('submiting form');
        },
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
}
// mockInput = {
//   // onSubmit: () => {
//   //   console.log('submiting form');
//   // },
//   title: 'Smart Form Demo',
//   fields: [
//     {
//       label: 'Username',
//       key: 'username',
//       required: true,
//       inputType: 'text',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       inputType: 'password',
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       inputType: 'email',
//     },
// {
//   label: 'Country',
//   key: 'country',
//   // multiple: true,
//   required: true,
//   inputType: 'selector',
//   options: [
//     {
//       label: 'Chile',
//       value: 'cl',
//       // selected: true,
//     },
//     {
//       label: 'Argentina',
//       value: 'arg',
//       selected: true,
//     },
//       ],
//     },
//     {
//       label: 'Subscribe to newsletter?',
//       key: 'newsletter',
//       required: false,
//       // inputType: 'checkbox',
//       inputType: 'radio-button',
//       options: [
//         {
//           label: 'Yes',
//           value: true,
//           selected: true,
//         },
//         {
//           label: 'No',
//           value: false,
//           selected: true,
//         },
//       ],
//     },
//   ],
// buttons: [
//   {
//     label: 'Send',
//     action: () => {
//       console.log('submiting form');
//     },
//     type: 'submit',
//   },
//   {
//     label: 'Read more...',
//     action: () => {
//       console.log('reading a little bit more....');
//     },
//     type: 'text',
//   },
// ],
// };

// mockEdit = {
//   // onSubmit: () => {
//   //   console.log('submiting form');
//   // },
//   fields: [
//     {
//       label: 'Username',
//       key: 'username',
//       value: 'John Doe',
//       required: true,
//       inputType: 'text',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       inputType: 'password',
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       value: 'john@doe.dev',
//       required: true,
//       inputType: 'email',
//     },
//     {
//       label: 'Country',
//       key: 'country',
//       required: true,
//       inputType: 'selector',
//       options: [
//         {
//           label: 'Chile',
//           value: 'cl',
//         },
//         {
//           label: 'Argentina',
//           value: 'arg',
//           selected: true,
//         },
//       ],
//     },
//     {
//       label: 'Subscribe to newsletter?',
//       key: 'newsletter',
//       required: false,
//       inputType: 'radio-button',
//       options: [
//         {
//           label: 'Yes',
//           value: true,
//         },
//         {
//           label: 'No',
//           value: false,
//           selected: false,
//         },
//       ],
//     },
//   ],
//   buttons: [
//     {
//       label: 'Send',
//       action: () => {
//         console.log('submiting form');
//       },
//       type: 'submit',
//     },
//   ],
// };
