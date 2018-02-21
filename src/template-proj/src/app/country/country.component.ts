import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  values: string[];

  constructor(private _valueService: ValuesService) { }

  ngOnInit() {
    this._valueService.getValues()
      .subscribe(rs=>console.log(rs));
  }

}
