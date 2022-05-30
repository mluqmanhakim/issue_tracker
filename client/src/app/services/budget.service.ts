import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../budget';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private url = 'http://localhost:8000/api/budget';
  private urlIncomeOutcome = 'http://localhost:8000/api/income-outcome';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Promise<Array<Budget>> {
    return this.httpClient.get<Array<Budget>>(this.url).toPromise();
  }

  public get(id: number): Observable<Budget> {
    return this.httpClient.get<Budget>(`${this.url}/${id}`);
  }

  public update(id: number, updatedIssue: Budget): Observable<Budget>  {
    return this.httpClient.put<Budget>(`${this.url}/${id}`, updatedIssue, httpOptions);
  }

  public add(newIssue: Budget): Observable<Budget> {
    return this.httpClient.post<Budget>(this.url, newIssue, httpOptions);
  }

  public getIncomeOutcome() {
    return this.httpClient.get(this.urlIncomeOutcome, httpOptions);
  }

}
