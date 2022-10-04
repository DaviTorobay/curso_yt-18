import { Injectable } from '@angular/core';
import { Catraca } from '../Catraca';
import { Treinamentos } from '../Treinamento';
import { Catraca_Treinamentos } from '../Catraca_Treinamento';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/Catraca';
  private apiUrl1 = 'http://localhost:3000/Treinamentos';
  private apiUrl2 = 'http://localhost:3000/Catraca_Treinamento';

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

  getTreinamentos(): Observable<Treinamentos[]> {
    return this.http.get<Treinamentos[]>(this.apiUrl1);
  }
}
