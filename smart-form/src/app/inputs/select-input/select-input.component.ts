import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';

@Component({
  selector: 'sf-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent implements OnInit {
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
