import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { IndexComponent } from './components/index/index.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from './components/about/about.component';
import { BudgetListComponent } from './components/budget/budget-list/budget-list.component';
import { BudgetEditComponent } from './components/budget/budget-edit/budget-edit.component';
import { BudgetFormComponent } from './components/budget/budget-form/budget-form.component';
import { BudgetNewComponent } from './components/budget/budget-new/budget-new.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    BudgetListComponent,
    BudgetListComponent,
    BudgetEditComponent,
    BudgetFormComponent,
    BudgetNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
