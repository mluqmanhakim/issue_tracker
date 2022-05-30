import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-new',
  templateUrl: './budget-new.component.html',
  styleUrls: ['./budget-new.component.css']
})
export class BudgetNewComponent implements OnInit {

  constructor(
    private budgetService: BudgetService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSave(issue: Budget) {
    this.budgetService.add(issue).subscribe((data) => {
      this.router.navigate(['/budget']);
    });
  }

}
