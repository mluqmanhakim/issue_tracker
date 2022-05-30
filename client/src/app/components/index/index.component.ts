import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public income: number;
  public outcome: number;

  constructor(private budgetService: BudgetService) { }
  
  ngOnInit(): void {
    this.budgetService.getIncomeOutcome().subscribe((data: any) => {
      this.income = data['income'];
      this.outcome = data['outcome'];
    });
  }
}
