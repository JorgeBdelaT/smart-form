import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PlainInputComponent } from './plain-input/plain-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { MultipleSelectInputComponent } from './multiple-select-input/multiple-select-input.component';
import { RadioButtonInputComponent } from './radio-button-input/radio-button-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';

@NgModule({
  declarations: [
    PlainInputComponent,
    SelectInputComponent,
    MultipleSelectInputComponent,
    RadioButtonInputComponent,
    CheckboxInputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    PlainInputComponent,
    SelectInputComponent,
    MultipleSelectInputComponent,
    RadioButtonInputComponent,
    CheckboxInputComponent,
  ],
})
export class InputsModule {}
