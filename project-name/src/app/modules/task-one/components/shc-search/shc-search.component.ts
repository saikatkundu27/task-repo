import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SHC } from 'src/app/models/shared-model';


@Component({
  selector: 'app-shc-search',
  templateUrl: './shc-search.component.html',
  styleUrls: ['./shc-search.component.scss'],
})
export class ShcSearchComponent implements OnInit {
  @Input('showInput') showInput :boolean=false;
  @Output() dismiss=new EventEmitter();
  searchForm!: FormGroup;
  shcData: SHC[] = [];
  filteredShcData: SHC[] = []; 

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
      {
        code: 'ABCG',
        desc: 'Desc14',
      },
      {
        code: 'ABCG',
        desc: 'Desc14',
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
    this.dismiss.emit('close');
    console.log('Cancel called');
  }
  handleApply()
  {
    this.dismiss.emit('close');
    console.log('Apply called');
  }
}
