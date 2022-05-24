import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {
  public budget: Budget;
 
  constructor(
    private budgetService: BudgetService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    
    this.budgetService.get(id).subscribe((data: Budget) => {
      this.budget = data;
    });
    // console.log(this.budget);
    
  }

  public onSave(issue: Budget) {
    this.budgetService.update(issue.id, issue).subscribe(() => {
      this.router.navigate(['/budget']);
    });
  }

}
