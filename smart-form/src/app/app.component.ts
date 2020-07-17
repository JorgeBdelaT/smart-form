import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smart-form';
  mockInput = {
    // onSubmit: () => {
    //   console.log('submiting form');
    // },
    fields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        inputType: 'text',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        inputType: 'password',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        inputType: 'password',
      },
      {
        label: 'Country',
        key: 'country',
        required: true,
        inputType: 'selector',
        options: [
          {
            label: 'Chile',
            value: 'cl',
          },
          {
            label: 'Argentina',
            value: 'arg',
          },
        ],
      },
      {
        label: 'Subscribe to newsletter?',
        key: 'newsletter',
        required: false,
        inputType: 'radio-button',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
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
