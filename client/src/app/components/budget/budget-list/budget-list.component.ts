import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  public budgets: Array<Budget> = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getAllBudget()
  }

  public async getAllBudget(): Promise<void> {
    this.budgets = await this.budgetService.getAll();
  }
}
