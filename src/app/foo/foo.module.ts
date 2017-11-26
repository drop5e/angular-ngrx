import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FooComponent } from './foo.component';

import { fooReducer } from './foo.reducer';
import { FooEffects } from './foo.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([FooEffects]),
    StoreModule.forRoot({ foo: fooReducer })
  ],
  declarations: [FooComponent],
  exports: [FooComponent]
})
export class FooModule { }
