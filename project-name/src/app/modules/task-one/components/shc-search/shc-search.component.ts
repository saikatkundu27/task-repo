import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shc-search',
  templateUrl: './shc-search.component.html',
  styleUrls: ['./shc-search.component.scss'],
})
export class ShcSearchComponent implements OnInit {
  searchForm!: FormGroup;
  shcData: { code: string; desc: string }[] = [];
  filteredShcData: { code: string; desc: string }[] = [];
  constructor() {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
    });
    this.shcData = [
      {
        code: 'ABC',
        desc: 'Desc1',
      },
      {
        code: 'ABCD',
        desc: 'Desc1r',
      },
      {
        code: 'ABCD#W',
        desc: 'Desc1h',
      },
      {
        code: 'ABCG',
        desc: 'Desc14',
      },
    ];
    this.filteredShcData = this.shcData;
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((data) => {
      this.filteredShcData = this.shcData.filter((ele) => {
        return (
          ele.code.includes(data.searchText) ||
          ele.desc.includes(data.searchText)
        );
      });
    });
  }
  handleCancel() {
    console.log('Cancel called');
  }
  handleApply()
  {
    console.log('Apply called');
  }
}
