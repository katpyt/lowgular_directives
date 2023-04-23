import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleDirectiveModule } from './directives/example/example.directive-module';
import { EmitterDirectiveModule } from './directives/emitter/emitter.directive-module';
import { HandlerDirectiveModule } from './directives/handler/handler.directive-module';
import { HasRoleDirectiveModule } from './directives/has-role/has-role.directive-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ExampleDirectiveModule,
    EmitterDirectiveModule,
    HandlerDirectiveModule,
    HasRoleDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
