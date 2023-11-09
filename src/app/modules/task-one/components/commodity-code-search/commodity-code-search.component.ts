import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommodityCode } from '../../../../models/shared-model';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-commodity-code-search',
  templateUrl: './commodity-code-search.component.html',
  styleUrls: ['./commodity-code-search.component.scss'],
})
export class CommodityCodeSearchComponent implements OnInit {
  @Input('showInput') showInput: boolean = false;
  @Output() dismiss = new EventEmitter();
  searchForm!: FormGroup;
  isChecked: boolean = false;
  commodityCodeData: CommodityCode[] = [];
  filteredCommodityCodeData: CommodityCode[] = [];

  constructor(private dataService: DataApiService) {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.searchForm.valueChanges.subscribe((data) => {
    
      this.filteredCommodityCodeData = this.commodityCodeData.filter((ele) => {
        return (
          ele.code.toString().includes(data.searchText) ||
          ele.desc.includes(data.searchText)
        );
      });
    });
  }
  loadData() {
    this.dataService.getCommodityCodeData().subscribe({
      next: (resp) => {
        if (resp.status === 200) {
          this.commodityCodeData = resp.body || [];
          this.filteredCommodityCodeData = this.commodityCodeData;
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
