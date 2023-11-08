import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-task-one-landing',
  templateUrl: './task-one-landing.component.html',
  styleUrls: ['./task-one-landing.component.scss'],
})
export class TaskOneLandingComponent implements OnInit {
  constructor() {}
  modal: boolean = false;

  ngOnInit(): void {}

  open() {
    this.modal = true;
  }
  close() {
    this.modal = false;
  }
}
