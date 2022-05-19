import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from 'src/app/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-new',
  templateUrl: './issue-new.component.html',
  styleUrls: ['./issue-new.component.css']
})
export class IssueNewComponent {

  constructor(private issueService: IssueService, private router: Router) { }

  public onSave(issue: Issue) {
    this.issueService.add(issue).subscribe((data) => {
      this.router.navigate(['/issues']);
    });
  }
}
