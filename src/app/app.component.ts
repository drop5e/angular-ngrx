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
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      input: [ this.value, Validators.required ]
    });
  }
  private test(value) {
    console.log(value)
    console.log(this.form.valid)
  }
}
