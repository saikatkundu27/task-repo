import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-footer',
  templateUrl: './search-footer.component.html',
  styleUrls: ['./search-footer.component.scss'],
})
export class SearchFooterComponent implements OnInit {
  @Output() cancel = new EventEmitter();
  @Output() apply = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleCancel() {
    this.cancel.emit();
  }
  handleApply() {
    this.apply.emit();
  }
}
