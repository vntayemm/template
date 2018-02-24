import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TemplateProjApiService } from './template-proj-api.service';
import { DummyData } from '../models/dummy-data';

@Injectable()
export class ValuesService {

  private _apiName = 'values';

  constructor(private _api: TemplateProjApiService) { }

  //Get
  getValues(): Observable<DummyData[]> {
    var rs = this._api.get<DummyData[]>(this._apiName);
    return rs;
  }

  //Post
  postValue(model: DummyData): Observable<number> {
    var rs = this._api.post<number>(this._apiName, model);
    return rs;
  }

  //Put
  putValue(id: number, model: DummyData): Observable<boolean> {
    var rs = this._api.put<boolean>(this._apiName, id, model);
    return rs;
  }

  //Delete
  deleteValue(id: number): Observable<boolean> {
    var rs = this._api.delete<boolean>(this._apiName, id);
    return rs;
  }

}
