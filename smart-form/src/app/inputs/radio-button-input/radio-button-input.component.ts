import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';

@Component({
  selector: 'sf-radio-button-input',
  templateUrl: './radio-button-input.component.html',
  styleUrls: ['./radio-button-input.component.scss'],
})
export class RadioButtonInputComponent implements OnInit {
  @Input() field: FieldData;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {
    this.setValidators();
  }

  setValidators() {
    const { required } = this.field;

    const validators = [];

    if (required) {
      validators.push(Validators.required);
    }

    this.control.setValidators(validators);
  }

  showErrors() {
    const { touched, errors } = this.control;
    return errors && touched;
  }
}
