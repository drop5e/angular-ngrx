import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-input-template',
  templateUrl: './custom-input-template.component.html',
  styleUrls: ['./custom-input-template.component.css']
})
export class CustomInputTemplateComponent implements OnInit {

  private value;
  private cancelValue;

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (27 === event.which) this.value = this.cancelValue;
  }

  onFocus(event) {
    this.cancelValue = event.target.value;
  }

}
