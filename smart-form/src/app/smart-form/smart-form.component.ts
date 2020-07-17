import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { FormData } from 'src/app/interfaces';

@Component({
  selector: 'smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.scss'],
})
export class SmartFormComponent implements OnInit {
  @Input() data: FormData;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  buildFormGroup(): void {
    const fieldsOptions = {};
    const { fields } = this.data;

    for (let field of fields) {
      if (!field.options) {
        fieldsOptions[field.key] = field.value ? field.value : '';
      }
      // else if (field.inputType === 'selector' && field.multiple) {
      //   const selected = field.options
      //     .filter((option) => option.selected)
      //     .map((s) => s.value);
      //   fieldsOptions[field.key] = this.fb.array(selected);
      // } else if (
      //   field.inputType === 'selector' ||
      //   field.inputType === 'radio-button'
      // ) {
      //   const selected = field.options.filter((option) => option.selected);
      //   fieldsOptions[field.key] = selected[0] ? selected[0].value : '';
      // } else if (field.inputType === 'checkbox') {
      //   const selected = field.options.filter((option) => option.selected);
      //   const selectedValues = selected.map((s) => s.value);
      //   fieldsOptions[field.key] = this.fb.array(selectedValues);
      // }
    }

    this.formGroup = this.fb.group(fieldsOptions);
    console.log(this.formGroup.controls.username);
  }
}
