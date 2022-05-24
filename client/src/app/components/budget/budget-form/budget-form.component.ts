import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Budget } from 'src/app/budget';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnChanges {
  @Input() budget: Budget;

  @Output() save: EventEmitter<Budget> = new EventEmitter<Budget>();

  public budgetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.budgetForm = this.formBuilder.group({
      id: [undefined],
      title: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  public ngOnChanges(): void {
    if (this.budget) {
      this.budgetForm.patchValue(this.budget);
    }
  }

  public onSubmit(): void {
    if (!this.budgetForm.valid) {
      return;
    }
    this.save.emit(this.budgetForm.value);
  }

  public setIsInvalidClass(property: string): boolean {
    return (
      this.budgetForm.get(property)?.invalid &&
      (this.budgetForm.get(property)?.dirty ||
        this.budgetForm.get(property)?.touched)
    );
  }

}
