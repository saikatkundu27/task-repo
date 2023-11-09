import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommodityCode, SHC, TableInfo } from 'src/app/models/shared-model';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  fakeServer='https://my-json-server.typicode.com/saikatkundu27/task-repo';
  constructor(private http:HttpClient) { }

  getTableData()
  {
   return this.http.get<TableInfo[]>(this.fakeServer+'/tableInfo',{
      observe:'response'
    })
  }
  getCommodityCodeData()
  {
   return this.http.get<CommodityCode[]>(this.fakeServer+'/commodityCodeData',{
      observe:'response'
    })
  }
  getSHCData()
  {
   return this.http.get<SHC[]>(this.fakeServer+'/shcData',{
      observe:'response'
    })
  }
}
