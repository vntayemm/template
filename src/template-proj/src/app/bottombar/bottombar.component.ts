import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { DummyData } from '../models/dummy-data';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit, OnChanges {

  values: DummyData[] = [];
  selectedValue: DummyData;

  private _isDesc = true;

  constructor(private _valueService: ValuesService) { }

  //Init
  ngOnInit() {
    this.getValues();
  }

  //This change
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes['values']) {
      // console.log(this.values);
    }
  }

  //Sort
  sortValues() {
    if (this._isDesc) {
      this.values.sort((a, b) => b.Id - a.Id);
    } else {
      this.values.sort((a, b) => a.Id - b.Id);
    }
    this._isDesc = !this._isDesc;
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
        if (!success) {
          //Rollback
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
