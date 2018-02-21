import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TemplateProjApiService {

  private _headers = new HttpHeaders();
  private _apiUri = 'http://localhost:5000/api/';

  constructor(private _http: HttpClient) {
    // this._headers.append("Access-Control-Allow-Origin","*");
    // this._headers.append("Access-Control-Allow-Credentials", 'true');    
    // this._headers.append("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, HEAD, OPTIONS"); 
    this._headers.append('Content-Type', 'application/json');
  }

  get<T>(apiUrl: string): Observable<T> {
    var apiUrl = this._apiUri.concat(apiUrl);
    return this._http.get<T>(apiUrl);
  }

  post<T>(apiUrl: string, body: any): Observable<T> {
    var apiUrl = this._apiUri.concat(apiUrl);
    return this._http.post<T>(apiUrl, body);
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
