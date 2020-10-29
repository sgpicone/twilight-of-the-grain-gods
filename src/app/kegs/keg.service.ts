import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Keg, KegAdapter, KegSummary, KegSummaryAdapter } from './_models/keg';

@Injectable({
  providedIn: 'root'
})
export class KegService {

  private baseUrl = 'http://localhost:8000';//'https://y7zqx1hdji.execute-api.us-east-1.amazonaws.com/production';

  constructor(private http: HttpClient, private kegAdapter: KegAdapter, private summaryAdapter: KegSummaryAdapter) {

  }

  public list(): Observable<KegSummary[]> {
    const url = `${this.baseUrl}/kegs`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item) => this.summaryAdapter.adapt(item)))
    );
  }

  public getKegById(id: number): Observable<Keg> {
    const url = `${this.baseUrl}/kegs/${id}`;
    return this.http.get(url).pipe(
      map((item) => this.kegAdapter.adapt(item))
    );
  }

}
