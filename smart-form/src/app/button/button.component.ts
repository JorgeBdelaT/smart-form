import { Component, OnInit, Input } from '@angular/core';

import { ButtonData } from 'src/app/interfaces';

@Component({
  selector: 'sf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() button: ButtonData;

  constructor() {}

  ngOnInit(): void {}
}
