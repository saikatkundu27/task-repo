import { Component, OnInit } from '@angular/core';
import { TableInfo } from 'src/app/models/shared-model';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss'],
})
export class InfoTableComponent implements OnInit {
  tableInfo: TableInfo[] = [];
  isAllSelected: boolean = false;
  sortType: string = 'ASC';
  constructor(private dataService: DataApiService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.dataService.getTableData().subscribe({
      next: (resp) => {
        if (resp.status === 200) {
          this.tableInfo = resp.body || [];
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
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
  sort(sortType: string, attr: keyof TableInfo) {
    if (sortType === 'ASC') {
      this.tableInfo.sort((info1, info2) => {
        return info1[attr] < info2[attr] ? 1 : -1;
      });
    } else {
      this.tableInfo.sort((info1, info2) => {
        return info1[attr] > info2[attr] ? 1 : -1;
      });
    }

    this.sortType = sortType;
  }
}
