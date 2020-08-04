import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

import { FormData } from 'src/app/interfaces';

@Component({
  selector: 'smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartFormComponent implements OnInit {
  @Input() data: FormData;
  @Output() sfSubmit = new EventEmitter();
  formGroup: FormGroup;
  validInput: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.valideInputData();

    if (this.validInput) {
      this.buildFormGroup();
    }
  }

  valideInputData() {
    const validInputTypes = [
      'text',
      'password',
      'email',
      'select',
      'radio-button',
      'multiple-select',
      'checkbox',
      undefined,
    ];

    if (this.data.fields === undefined || this.data.fields.length === 0) {
      this.validInput = false;
      throw Error(
        'Invalid input data structure, a non empty fields object must be provided'
      );
    }

    this.data.fields.forEach((field) => {
      if (
        (field.inputType === 'select' ||
          field.inputType === 'radio-button' ||
          field.inputType === 'multiple-select' ||
          field.inputType === 'checkbox') &&
        (field.options.length === 0 || field.options.length === undefined)
      ) {
        this.validInput = false;
        throw Error('A non empty options array must be provided');
      }
      if (validInputTypes.indexOf(field.inputType) < 0) {
        this.validInput = false;
        throw Error('Invalid inputType');
      }
    });
    this.validInput = true;
  }

  buildFormGroup(): void {
    const fieldsOptions = {};
    const { fields } = this.data;

    for (let field of fields) {
      if (
        field.inputType === 'text' ||
        field.inputType === 'password' ||
        field.inputType === 'email' ||
        field.inputType === undefined
      ) {
        fieldsOptions[field.key] = field.value ? field.value : '';
      } else if (
        field.inputType === 'select' ||
        field.inputType === 'radio-button'
      ) {
        const selected = field.options
          .filter((option) => option.selected)
          .map((option) => option.value);
        fieldsOptions[field.key] = selected[0];
      } else if (
        field.inputType === 'multiple-select' ||
        field.inputType === 'checkbox'
      ) {
        const selectedValues = field.options
          .filter((option) => option.selected)
          .map((option) => option.value);

        fieldsOptions[field.key] = [selectedValues];
      }
    }

    this.formGroup = this.fb.group(fieldsOptions);
    // console.log(this.formGroup.controls);
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.setErrors({ invalid: true });
      return;
    }
    this.formGroup.setErrors(null);
    this.sfSubmit.emit(this.formGroup.value);
  }
}
