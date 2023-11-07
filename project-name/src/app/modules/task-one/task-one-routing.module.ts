import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskOneLandingComponent } from './components/task-one-landing/task-one-landing.component';

const routes: Routes = [
    {
      path: '',
      component: TaskOneLandingComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskOneRoutingModule {}
