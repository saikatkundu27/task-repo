import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommodityCode } from 'src/app/models/shared-model';

@Component({
  selector: 'app-commodity-code-search',
  templateUrl: './commodity-code-search.component.html',
  styleUrls: ['./commodity-code-search.component.scss'],
})
export class CommodityCodeSearchComponent implements OnInit {
  @Input('showInput') showInput :boolean=false;
  @Output() dismiss=new EventEmitter();
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
        desc: 'Desc2',
      },
      {
        code: 112368545687,
        desc: 'Desc3',
      },
      {
        code: 112368545687,
        desc: 'Desc4',
      },
      {
        code: 1123685545687,
        desc: 'Desc5',
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
    this.dismiss.emit('close');
    console.log('Cancel called');
  }
  handleApply() {
    this.dismiss.emit('close');
    console.log('Apply called');
  }
}
