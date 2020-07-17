import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sf-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit {
  @Input() label: string;
  @Input() key: string;
  @Input() inputType: string;
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
