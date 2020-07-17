import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';

@Component({
  selector: 'sf-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() field: FieldData;
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.setValidators();
  }

  setValidators() {
    const { required, minLength, maxLength, pattern } = this.field;
    console.log('Validators:', required, minLength, maxLength);

    const validators = [];

    if (required) {
      validators.push(Validators.required);
    }
    if (minLength) {
      validators.push(Validators.minLength(minLength));
    }
    if (maxLength) {
      validators.push(Validators.maxLength(maxLength));
    }
    if (pattern) {
      validators.push(Validators.pattern(pattern));
    }

    this.control.setValidators(validators);
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && errors && touched;
  }
}
