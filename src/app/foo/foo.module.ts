import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FooComponent } from './foo.component';

import { fooReducer } from './foo.reducer';
import { FooEffects } from './foo.effects';
import { ModalOverlayComponent } from '../modal-overlay/modal-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([FooEffects]),
    StoreModule.forRoot({ foo: fooReducer })
  ],
  declarations: [
    FooComponent,
    ModalOverlayComponent
  ],
  exports: [FooComponent]
})
export class FooModule { }
