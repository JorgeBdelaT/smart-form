import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';
import { MultipleOpsValidator } from 'src/app/inputs/validators/multiple-options-validator';

@Component({
  selector: 'sf-multiple-select-input',
  templateUrl: './multiple-select-input.component.html',
  styleUrls: ['./multiple-select-input.component.scss'],
})
export class MultipleSelectInputComponent implements OnInit {
  @Input() field: FieldData;
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.setValidators();
    console.log(this.formGroup);
  }

  setValidators() {
    const { required, minOptions, maxOptions } = this.field;

    const validators = [];

    if (minOptions) {
      // custom validator
      validators.push(MultipleOpsValidator.minOptions(minOptions));
    }
    if (maxOptions) {
      // custom validator
      validators.push(MultipleOpsValidator.maxOptions(maxOptions));
    }
    if (required) {
      validators.push(Validators.required);
    }

    this.formGroup.controls[this.field.key].setValidators(validators);
  }

  showErrors() {
    const { touched, errors } = this.formGroup.controls[this.field.key];
    return errors && touched;
  }
}
