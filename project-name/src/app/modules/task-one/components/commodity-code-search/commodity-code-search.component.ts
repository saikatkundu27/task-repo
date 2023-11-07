import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommodityCode } from 'src/app/models/shared-model';

@Component({
  selector: 'app-commodity-code-search',
  templateUrl: './commodity-code-search.component.html',
  styleUrls: ['./commodity-code-search.component.scss'],
})
export class CommodityCodeSearchComponent implements OnInit {
  searchForm!: FormGroup;
  isChecked:boolean=false;
  commodityCodeData: CommodityCode[] = [];
  filteredCommodityCodeData: CommodityCode[] = [];
  constructor() {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
     
    });

    this.commodityCodeData = [
      {
        code: 112368545687,
        desc: 'Desc1',
      },
      {
        code: 112368545687,
        desc: 'Desc1',
      },
      {
        code: 112368545687,
        desc: 'Desc1',
      },
      {
        code: 112368545687,
        desc: 'Desc1',
      },
      {
        code: 1123685545687,
        desc: 'Desc1',
      },
      {
        code: 1189898545687,
        desc: 'Desc1',
      },
      {
        code: 11236854214687,
        desc: 'Desc1',
      },
      {
        code: 112368545354687,
        desc: 'Desc1',
      },
      {
        code: 112368545687,
        desc: 'Desc1',
      },
      {
        code: 112368545687,
        desc: 'Desc1',
      },
    ];
    this.filteredCommodityCodeData=this.commodityCodeData;
  }
  filteredShcData: { code: string; desc: string }[] = [];
  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.filteredCommodityCodeData = this.commodityCodeData.filter((ele) => {
        return (
          ele.code.toString().includes(data.searchText) ||
          ele.desc.includes(data.searchText)
        );
      });
    });
  }
  handleCancel() {
    console.log('Cancel called');
  }
  handleApply() {
    console.log('Apply called');
  }
}
