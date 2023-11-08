import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShcSearchComponent } from './components/shc-search/shc-search.component';
import { TaskOneRoutingModule } from './task-one-routing.module';
import { TaskOneLandingComponent } from './components/task-one-landing/task-one-landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFooterComponent } from './components/search-footer/search-footer.component';
import { CommodityCodeSearchComponent } from './components/commodity-code-search/commodity-code-search.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    ShcSearchComponent,
    TaskOneLandingComponent,
    SearchFooterComponent,
    CommodityCodeSearchComponent,
    InfoTableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskOneRoutingModule
  ]
})
export class TaskOneModule { }
