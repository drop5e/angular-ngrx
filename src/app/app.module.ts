import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomInputTemplateComponent } from './custom-input-template/custom-input-template.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomInputTemplateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
