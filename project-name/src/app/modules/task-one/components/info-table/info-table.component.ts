import { Component, OnInit } from '@angular/core';
import { TableInfo } from 'src/app/models/shared-model';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss'],
})
export class InfoTableComponent implements OnInit {
  tableInfo: TableInfo[] = [];
  isAllSelected: boolean = false;
  sortType:string='ASC';
  constructor() {
    this.tableInfo = [
      {
        isChecked: false,
        type: 'Activity Number',
        flight: '25 Sep 2016',
        transaction: '20 Sep 2016',
        partner: 'JPSC',
        activity: 'Enrollment',
        miles: 1000,
      },
      {
        isChecked: false,
        type: 'Activity Number',
        flight: '25 Sep 2016',
        transaction: '20 Sep 2016',
        partner: 'JPSC',
        activity: 'Enrollment',
        miles: 1001,
      },
      {
        isChecked: false,
        type: 'Activity Number',
        flight: '25 Sep 2016',
        transaction: '20 Sep 2016',
        partner: 'JPSC',
        activity: 'Enrollment',
        miles: 1003,
      },
      {
        isChecked: false,
        type: 'Activity Number',
        flight: '25 Sep 2016',
        transaction: '20 Sep 2016',
        partner: 'JPSC',
        activity: 'Enrollment',
        miles: 1002,
      },
    ];
  }

  ngOnInit(): void {}

  handleSelectAll(event: any) {
    const checked = event.target.checked;
    if (checked) {
      this.tableInfo = this.tableInfo.map((info) => ({
        ...info,
        isChecked: true,
      }));
    } else {
      this.tableInfo = this.tableInfo.map((info) => ({
        ...info,
        isChecked: false,
      }));
    }
  }
  sort(sortType:string,attr:keyof TableInfo)
  {
   
      if(sortType === 'ASC')
      {
        this.tableInfo.sort((info1,info2)=>{
          return info1[attr]< info2[attr]?1:-1;
        })
      }
      else{
        this.tableInfo.sort((info1,info2)=>{
          return info1[attr]> info2[attr]?1:-1;
        })
      }
    

    this.sortType=sortType;
  }
}
