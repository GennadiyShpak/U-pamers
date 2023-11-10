import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

import { UserDetailed } from '../main/main.model';

const BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<UserDetailed[]> {
    return this.http.get<UserDetailed[]>(`${BASE_URL}/users`).pipe(take(1));
  }
}
