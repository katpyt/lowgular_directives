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
import { SimpleFormComponentModule } from "./components/simple-form/simple-form.component-module";
import { SnackBarDirectiveModule } from './directives/snack-bar/snack-bar.directive-module';
import { ConfirmDialogComponentModule } from './components/confirm-dialog/confirm-dialog.component-module';
import { DialogComponentModule } from './components/dialog/dialog.component-module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MovableDirectiveModule } from './directives/movable-directive/movable.directive-module';
import { BlockPasteDirectiveModule } from './directives/block-paste-directive/block-paste.directive-module';
import { BackgroundCarouselDirectiveModule } from './directives/background-carousel/background-carousel.directive-module';
import { DeleteProductDirectiveModule } from './directives/delete-product/delete-product.directive-module';
import { UrlDirectiveModule } from './directives/url/url.directive-module';

@NgModule({
  declarations: [AppComponent],
  providers: [ConfirmDialogComponent],
  bootstrap: [AppComponent],
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
    HasRoleDirectiveModule,
    SimpleFormComponentModule,
    SnackBarDirectiveModule,
    ConfirmDialogComponentModule,
    DialogComponentModule,
    BlockPasteDirectiveModule,
    MovableDirectiveModule,
    BackgroundCarouselDirectiveModule,
    DeleteProductDirectiveModule,
    UrlDirectiveModule
  ]
})
export class AppModule { } 
