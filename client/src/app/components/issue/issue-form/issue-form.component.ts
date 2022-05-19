import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {
  @Input() issue: Issue;

  @Output() save: EventEmitter<Issue> = new EventEmitter<Issue>();

  public issueForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.issueForm = this.formBuilder.group({
      id: [undefined],
      title: ['', [Validators.required]],
      description: '',
      place: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  public ngOnChanges(): void {
    if (this.issue) {
      this.issueForm.patchValue(this.issue);
    }
  }

  public onSubmit(): void {
    if (!this.issueForm.valid) {
      return;
    }
    this.save.emit(this.issueForm.value);
  }

  public setIsInvalidClass(property: string): boolean {
    return (
      this.issueForm.get(property)?.invalid &&
      (this.issueForm.get(property)?.dirty ||
        this.issueForm.get(property)?.touched)
    );
  }
}
