import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  Values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
 getValues() {
  this.http.get("http://localhost:5000/api/Values").subscribe(
    response => {
      this.Values = response;
    } ,
    error => {
       console.log(error);
     }
  )
 }
}
