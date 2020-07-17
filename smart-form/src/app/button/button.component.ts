import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() action: () => void;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
