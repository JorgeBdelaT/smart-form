import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputData;
  submitted = false;
  formResult = null;

  defaultStructure = {
    title: 'Form title',
    fields: [
      // text-input
      {
        label: 'text-input example',
        key: 'text',
        value: '',
        inputType: 'text',
        required: true,
        minLength: 4,
        maxLength: 10,
        pattern: /^[a-z0-9]+$/,
      },
      // password-input
      {
        label: 'password-input example',
        key: 'password',
        inputType: 'password',
        required: true,
        minLength: 6,
        maxLength: 20,
      },
      // email-input
      {
        label: 'email-input example',
        key: 'email',
        inputType: 'email',
        required: true,
      },
      // select-input
      {
        label: 'select-input example',
        key: 'select',
        required: true,
        inputType: 'select',
        options: [
          {
            label: 'option 1',
            value: '1',
          },
          {
            label: 'option 2',
            value: '2',
          },
          {
            label: 'option 3',
            value: '3',
            // selected: true,
          },
        ],
      },
      // radio-button-input
      {
        label: 'radio-button-input example',
        key: 'radio-button',
        required: true,
        inputType: 'radio-button',
        options: [
          {
            label: 'option 1',
            value: true,
          },
          {
            label: 'option 2',
            value: false,
            // selected: true,
          },
        ],
      },
      // multiple-select-input
      {
        label: 'multiple-select-input example',
        key: 'multiple-select',
        required: true,
        inputType: 'multiple-select',
        maxOptions: 2,
        minOptions: 1,
        options: [
          {
            label: 'option 1',
            value: '1',
            // selected: true,
          },
          {
            label: 'option 2',
            value: '2',
            // selected: true,
          },
          {
            label: 'option 3',
            value: '3',
            // selected: true,
          },
        ],
      },
      // checkbox-input
      {
        label: 'check-box-input example',
        key: 'check-box',
        required: true,
        inputType: 'checkbox',
        maxOptions: 3,
        minOptions: 1,
        options: [
          {
            label: 'option 1',
            value: '1',
            // selected: true,
          },
          {
            label: 'option 2',
            value: '2',
            // selected: true,
          },
          {
            label: 'option 3',
            value: '3',
            // selected: true,
          },
          {
            label: 'option 4',
            value: '4',
            // selected: true,
          },
          {
            label: 'option 5',
            value: '5',
            // selected: true,
          },
          {
            label: 'option 6',
            value: '6',
            // selected: true,
          },
        ],
      },
    ],
    button: {
      label: 'Send',
    },
  };

  mockInput = {
    title: 'My custom form',
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
            // selected: true,
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
    button: {
      label: 'Send',
    },
  };

  ngOnInit() {
    this.inputData = this.defaultStructure;
  }

  onTextareaInput(e) {
    const input = this.formatToJSON(e.target.value);
    if (input) {
      this.inputData = input;
    }
  }

  onSfSubmit(e) {
    console.log(e);
    this.formResult = e;
  }

  onTrySubmit() {
    console.log(this.inputData);
    this.submitted = true;
  }

  onReset() {
    this.inputData = this.defaultStructure;
    this.submitted = false;
    this.formResult = null;
  }

  formatToJSON(str: string) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return false;
    }
  }
}
