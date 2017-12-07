import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.css']
})
export class ModalOverlayComponent implements OnInit {

  @Input() user;

  @Output() deleteEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete(user) {
    this.deleteEvent.emit(user)
  }

}
