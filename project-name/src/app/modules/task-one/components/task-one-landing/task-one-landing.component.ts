import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-task-one-landing',
  templateUrl: './task-one-landing.component.html',
  styleUrls: ['./task-one-landing.component.scss'],
})
export class TaskOneLandingComponent implements OnInit {
  constructor() {}
 
  @ViewChild('modal') modal!:ModalComponent
  ngOnInit(): void {}

  open(type:string) {
    this.modal.type=type;
    this.modal.modal=true;

    type==='table'?this.modal.title='Table Heading':null;
    type==='com'?this.modal.title='Commodity Code':null;
    type==='shc'?this.modal.title='SHC':null;
  }

}
