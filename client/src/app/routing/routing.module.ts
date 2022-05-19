import { NgModule } from '@angular/core';
import { IssueListComponent } from '../components/issue/issue-list/issue-list.component';
import { IssueDetailComponent } from '../components/issue/issue-detail/issue-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { IssueEditComponent } from '../components/issue/issue-edit/issue-edit.component';
import { IssueNewComponent } from '../components/issue/issue-new/issue-new.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'issues',
    component: IssueListComponent,
  },
  {
    path: 'issues/new',
    component: IssueNewComponent,
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
