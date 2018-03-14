import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TemplateProjApiService {
  private _apiUri = 'http://localhost:65337/api';

  constructor(private _httpClient: HttpClient) {}

  get<T>(apiUrl: string): Observable<T> {
    var apiUrl =  `${this._apiUri}/${apiUrl}`;
    return this._httpClient.get<T>(apiUrl);
  }

  post<T>(apiUrl: string, body: any): Observable<T> {
    var apiUrl =  `${this._apiUri}/${apiUrl}`;
    return this._httpClient.post<T>(apiUrl, body );
  }

  put<T>(apiUrl: string, id: number, body: any): Observable<T> {
    var apiUrl = `${this._apiUri}/${apiUrl}/${id}`;
    return this._httpClient.put<T>(apiUrl, body);
  }

  delete<T>(apiUrl: string, id: number): Observable<T> {
    var apiUrl =  `${this._apiUri}/${apiUrl}/${id}`;
    return this._httpClient.delete<T>(apiUrl);
  }

  private handleResult<T>(rs: any): any {
    if (rs.ok && rs._body) {
      return <T>rs.json();

    } else if (rs.ok) {
      return rs.ok;

    } else {
      return rs;
    }
  }
}
