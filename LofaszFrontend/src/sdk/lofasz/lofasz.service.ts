import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LofaszState } from './lofasz.model';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class LofaszService {

  private apiBaseUrl = 'https://localhost:7276';

  constructor(private http: HttpClient) { }

  getLofaszok(): Observable<LofaszState[]> {
    return this.http.get<LofaszState[]>(this.apiBaseUrl + "/api/Lofasz");
  }

  getLofaszById(id: Guid): Observable<LofaszState> {
    return this.http.get<LofaszState>(this.apiBaseUrl + "/api/Lofasz/" + id);
  }

  deleteLofaszById(id: Guid): Observable<Guid> {
    return this.http.delete<Guid>(this.apiBaseUrl + "/api/Lofasz/" + id);
  }

  createLofasz(lofasz: LofaszState): Observable<LofaszState> {
    return this.http.put<LofaszState>(this.apiBaseUrl + "/api/Lofasz", lofasz);
  }

  updateLofasz(lofasz: LofaszState): Observable<LofaszState> {
    return this.http.patch<LofaszState>(this.apiBaseUrl + "/api/Lofasz", lofasz);
  }
}
