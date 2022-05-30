import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { AboutComponent } from '../components/about/about.component';
import { BudgetListComponent } from '../components/budget/budget-list/budget-list.component';
import { BudgetEditComponent } from '../components/budget/budget-edit/budget-edit.component';
import { BudgetNewComponent } from '../components/budget/budget-new/budget-new.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'budget',
    component: BudgetListComponent,
  },
  {
    path: 'budget/:id/edit',
    component: BudgetEditComponent,
  },
  {
    path: 'budget/new',
    component: BudgetNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
