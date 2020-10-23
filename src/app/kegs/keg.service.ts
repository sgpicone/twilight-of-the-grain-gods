import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Keg, KegAdapter } from './_models/keg';

@Injectable({
  providedIn: 'root'
})
export class KegService {

  private baseUrl = 'http://localhost:8000';//'https://y7zqx1hdji.execute-api.us-east-1.amazonaws.com/production';

  constructor(private http: HttpClient, private adapter: KegAdapter) {

  }

  public list(): Observable<Keg[]> {
    const url = `${this.baseUrl}/kegs`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }

  public getKegById(id: number) {
    const url = `${this.baseUrl}/kegs/${id}`;
    return this.http.get(url).pipe(
      map((item) => this.adapter.adapt(item))
    );
  }

}
