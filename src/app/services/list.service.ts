import { Injectable } from '@angular/core';
import { Catraca } from '../Catraca';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/Catraca';

  constructor(private http: HttpClient) {}

  remove(id: number) {
    return this.http.delete<Catraca>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Catraca[]> {
    return this.http.get<Catraca[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Catraca> {
    return this.http.get<Catraca>(`${this.apiUrl}/${id}`);
  }
}
