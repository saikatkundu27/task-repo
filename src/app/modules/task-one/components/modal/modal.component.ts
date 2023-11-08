import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input() title:string='Modal Header';
  modal: boolean = false;
  type:string='';
  ngOnInit(): void {}

  open() {
    this.modal = true;
  }
  close() {
    this.modal = false;
  }
}
