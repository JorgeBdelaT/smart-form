import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

interface FieldOptionsData {
  label: string;
  value: string | boolean;
}

interface FieldData {
  label: string;
  key: string;
  required: boolean;
  inputType: string;
  options?: FieldOptionsData[];
}

interface ButtonData {
  label: string;
  action?: () => void;
  type: string;
}

interface FormData {
  // onSubmit: () => void;
  fields: FieldData[];
  buttons: ButtonData[];
}

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
      fieldsOptions[field.key] = '';
    }

    this.formGroup = this.fb.group(fieldsOptions);
    console.log(this.formGroup);
  }
}
