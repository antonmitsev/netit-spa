import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  public data: any;
  public data2: any;
 
  constructor(private http: HttpClient) { 

  }

  public ngOnInit() {
    this.http.get('http://localhost:3000/data').subscribe(
      (response) => {
        console.log(response);
        this.data = response;
      }
    );

    this.http.get('http://localhost:3000/data2').subscribe(
      (response) => {
        this.data2 = response;
      }
    );
   
   
    //this.data = data;
    //this.data2 = data2;
  }

}
