import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

import { FieldOptionsData } from 'src/app/interfaces';

@Component({
  selector: 'sf-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  @Input() label: string;
  @Input() key: string;
  @Input() inputType: string;
  @Input() control;
  @Input() options?: FieldOptionsData;
  @Input() multiple: boolean;

  constructor() {}

  ngOnInit(): void {}
}
