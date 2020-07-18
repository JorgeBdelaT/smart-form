import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormArray } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';
import { MultipleOpsValidator } from 'src/app/inputs/validators/multiple-options-validator';

@Component({
  selector: 'sf-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent implements OnInit {
  @Input() field: FieldData;
  @Input() formGroup: FormGroup;
  touched = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(e) {
    this.touched = true;

    const values = this.formGroup.controls[this.field.key].value;
    const value = e.target.value;
    if (values.includes(value)) {
      const i = values.indexOf(value);
      values.splice(i, 1);
    } else {
      values.push(value);
    }

    const { required, minOptions, maxOptions } = this.field;
    if (minOptions) {
      this.checkMinOptions(minOptions);
    }
    if (maxOptions) {
      this.checkMaxOptions(maxOptions);
    }
    if (required) {
      this.checkRequired();
    }
  }

  checkRequired() {
    const values = this.formGroup.controls[this.field.key].value;
    if (!values.length) {
      this.formGroup.controls[this.field.key].setErrors({ required: true });
    }
  }

  checkMinOptions(min: number) {
    const values = this.formGroup.controls[this.field.key].value;
    if (values.length < min) {
      this.formGroup.controls[this.field.key].setErrors({
        minOptions: { min, current: values.length },
      });
    } else {
      this.formGroup.controls[this.field.key].setErrors(null);
    }
  }

  checkMaxOptions(max: number) {
    const values = this.formGroup.controls[this.field.key].value;
    if (values.length > max) {
      this.formGroup.controls[this.field.key].setErrors({
        maxOptions: { max, current: values.length },
      });
    } else {
      this.formGroup.controls[this.field.key].setErrors(null);
    }
  }

  showErrors() {
    const { errors } = this.formGroup.controls[this.field.key];
    return this.touched && errors;
  }
}
