import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lofasz } from './lofasz.model';
import { Observable, delay, of } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class LofaszService {
  private apiBaseUrl = 'https://localhost:7276';

  constructor(private http: HttpClient) {}

  getLofaszok(): Observable<Lofasz[]> {
    return this.http.get<Lofasz[]>(this.apiBaseUrl + '/api/Lofasz');
  }

  getLofaszById(id: number): Observable<Lofasz> {
    return this.http.get<Lofasz>(this.apiBaseUrl + '/api/Lofasz/' + id);
  }

  deleteLofaszById(id: number): Observable<number> {
    return this.http.delete<number>(this.apiBaseUrl + '/api/Lofasz/' + id);
  }

  createLofasz(lofasz: Lofasz): Observable<Lofasz> {
    return this.http.put<Lofasz>(this.apiBaseUrl + '/api/Lofasz', lofasz);
  }

  updateLofasz(lofasz: Lofasz): Observable<Lofasz> {
    return this.http.patch<Lofasz>(this.apiBaseUrl + '/api/Lofasz', lofasz);
  }
}
