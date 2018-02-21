import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { DummyData } from '../models/dummy-data';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  values: DummyData[];

  constructor(private _valueService: ValuesService) { }

  ngOnInit() {
    this._valueService.getValues()
      .subscribe(rs => this.values = rs);
  }

}
