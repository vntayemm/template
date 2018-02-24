import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { DummyData } from '../models/dummy-data';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  values: DummyData[] = [];
  selectedValue: DummyData;

  constructor(private _valueService: ValuesService) { }

  ngOnInit() {
    this.getValues();
  }

  //Get
  getValues() {
    this._valueService.getValues()
      .subscribe(rs => this.values = rs);
  }

  //post
  postValue() {
    var model: DummyData = { Id: 0, Value: 'new value' };

    this._valueService.postValue(model)
      .subscribe(newId => {
        if (newId) {
          model.Id = newId;
          model.Value = `value-${newId}`;
          this.values.push(model);
        }
      });
  }

  //Put
  putValue() {
    this._valueService.putValue(this.selectedValue.Id, this.selectedValue)
      .subscribe(success => {
        if (success) {
        }
      });
  }

  //Delete
  deleteValue() {
    this._valueService.deleteValue(this.selectedValue.Id)
      .subscribe(success => {
        if (success) {
          var idx = this.values.findIndex(p => p.Id == this.selectedValue.Id);
          this.values.splice(idx, 1);
        }
      });
  }

}
