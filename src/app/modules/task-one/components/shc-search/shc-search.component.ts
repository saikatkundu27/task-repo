import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SHC } from 'src/app/models/shared-model';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-shc-search',
  templateUrl: './shc-search.component.html',
  styleUrls: ['./shc-search.component.scss'],
})
export class ShcSearchComponent implements OnInit {
  @Input('showInput') showInput: boolean = false;
  @Output() dismiss = new EventEmitter();
  searchForm!: FormGroup;
  shcData: SHC[] = [];
  filteredShcData: SHC[] = [];

  constructor(private dataService: DataApiService) {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.searchForm.valueChanges.subscribe((data) => {
      this.filteredShcData = this.shcData.filter((ele) => {
        return (
          ele.code.includes(data.searchText) ||
          ele.desc.includes(data.searchText)
        );
      });
    });
  }
  loadData() {
    this.dataService.getSHCData().subscribe({
      next: (resp) => {
        if (resp.status === 200) {
          this.shcData = resp.body || [];
          this.filteredShcData = this.shcData;
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  handleCancel() {
    this.dismiss.emit('close');
  }
  handleApply() {
    this.dismiss.emit('close');
  }
}
