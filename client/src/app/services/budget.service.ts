import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Promise<Array<Budget>> {
    return this.httpClient.get<Array<Budget>>(this.url).toPromise();
  }

}
