import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'task1',
  },
  {
    path: 'task1',
    loadChildren: () =>
      import('./modules/task-one/task-one.module').then((m) => m.TaskOneModule),
  },
  {
    path: 'task2',
    loadChildren: () =>
      import('./modules/task-two/task-two.module').then((m) => m.TaskTwoModule),
  },
  {
    path: '**',
    redirectTo: 'task1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
