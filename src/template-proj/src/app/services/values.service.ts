import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TemplateProjApiService } from './template-proj-api.service';

@Injectable()
export class ValuesService {

  constructor(private _api: TemplateProjApiService) { }

  getValues(): Observable<string[]> {
    var rs = this._api.get<string[]>('values');
    return rs;
  }

}
