import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { MultipleSelectInputComponent } from './multiple-select-input/multiple-select-input.component';
import { RadioButtonInputComponent } from './radio-button-input/radio-button-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    EmailInputComponent,
    SelectInputComponent,
    MultipleSelectInputComponent,
    RadioButtonInputComponent,
    CheckboxInputComponent,
  ],
  imports: [CommonModule],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    EmailInputComponent,
    SelectInputComponent,
    MultipleSelectInputComponent,
    RadioButtonInputComponent,
    CheckboxInputComponent,
  ],
})
export class InputsModule {}
