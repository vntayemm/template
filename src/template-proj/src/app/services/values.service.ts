import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TemplateProjApiService } from './template-proj-api.service';
import { DummyData } from '../models/dummy-data';

@Injectable()
export class ValuesService {

  constructor(private _api: TemplateProjApiService) { }

  getValues(): Observable<DummyData[]> {
    var rs = this._api.get<DummyData[]>('values');
    return rs;
  }

}
