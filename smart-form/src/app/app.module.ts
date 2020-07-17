import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmartFormComponent } from './smart-form/smart-form.component';
import { FieldComponent } from './field/field.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, SmartFormComponent, FieldComponent, ButtonComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
