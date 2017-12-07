import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value = 'test';
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      input: [ this.value, Validators.required ]
    });
  }
  private cancel() {
    this.form.get('input').setValue('ttt')
  }
}
