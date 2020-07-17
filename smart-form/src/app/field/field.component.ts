import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { FieldData } from 'src/app/interfaces';

@Component({
  selector: 'sf-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  @Input() fieldData: FieldData;
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
