import { Component, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  @Input() disabled = false;
  private innerValue: any = '';
  private cancelValue: string;

  get value() {
    return this.innerValue;
  }
  
  set value(val) {
    this.innerValue = val;
    this.onChange(val);
    this.onTouched();
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }
  
  registerOnTouched(fn) { 
    this.onTouched = fn;
  }
  
  writeValue(value) {
    if (value !== this.value) this.value = value;
  }

  onKeydown(event) {
    if (27 === event.which) this.value = this.cancelValue;
  }

  onFocus(event) {
    this.cancelValue = event.target.value;
  }

}
