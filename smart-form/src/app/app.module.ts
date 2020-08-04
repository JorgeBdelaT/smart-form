import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmartFormComponent } from './smart-form/smart-form.component';
import { FieldComponent } from './field/field.component';

import { InputsModule } from 'src/app/inputs/inputs.module';

@NgModule({
  declarations: [AppComponent, SmartFormComponent, FieldComponent],
  imports: [BrowserModule, ReactiveFormsModule, InputsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
