import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';

@Component({
  selector: 'sf-plain-input',
  templateUrl: './plain-input.component.html',
  styleUrls: ['./plain-input.component.scss'],
})
export class PlainInputComponent implements OnInit {
  @Input() field: FieldData;
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.setValidators();
  }

  setValidators() {
    const { required, minLength, maxLength, pattern } = this.field;

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
    if (this.field.inputType === 'email') {
      validators.push(
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      );
    }

    this.control.setValidators(validators);
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && errors && touched;
  }
}
