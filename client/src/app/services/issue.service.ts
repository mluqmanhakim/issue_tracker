import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../issue';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private url = 'http://127.0.0.10/api/issues';

  constructor(private httpClient: HttpClient) {

  }

  public getAll(): Promise<Array<Issue>> {
    return this.httpClient.get<Array<Issue>>(this.url).toPromise();
  }

  public get(id: number): Observable<Issue> {
    return this.httpClient.get<Issue>(`${this.url}/${id}`);
  }

  public update(id: number, updatedIssue: Issue): Observable<Issue>  {
    return this.httpClient.put<Issue>(`${this.url}/${id}`, updatedIssue, httpOptions);
  }

  public add(newIssue: Issue): Observable<Issue> {
    return this.httpClient.post<Issue>(this.url, newIssue, httpOptions);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`, httpOptions);
  }
}
