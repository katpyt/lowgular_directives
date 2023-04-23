import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleFormComponentModule } from './components/simple-form/simple-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: SimpleFormComponent }
  ]), SimpleFormComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
