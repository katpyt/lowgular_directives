import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SimpleFormComponent } from './simple-form.component';
import { MyRequiredDirectiveModule } from '../../directives/my-required/my-required.directive-module';

@NgModule({
  imports: [ReactiveFormsModule, MyRequiredDirectiveModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule],
  declarations: [SimpleFormComponent],
  providers: [],
  exports: [SimpleFormComponent]
})
export class SimpleFormComponentModule {
}
