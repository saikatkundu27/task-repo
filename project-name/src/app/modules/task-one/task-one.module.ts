import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShcSearchComponent } from './components/shc-search/shc-search.component';
import { TaskOneRoutingModule } from './task-one-routing.module';
import { TaskOneLandingComponent } from './components/task-one-landing/task-one-landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFooterComponent } from './components/search-footer/search-footer.component';



@NgModule({
  declarations: [
    ShcSearchComponent,
    TaskOneLandingComponent,
    SearchFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskOneRoutingModule
  ]
})
export class TaskOneModule { }
