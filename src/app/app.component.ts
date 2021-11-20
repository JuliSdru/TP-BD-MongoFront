import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userUrl = "";
  title = 'tp';
  urlServer = "https://tp-ticketera.herokuapp.com/";

  constructor(private http: HttpClient) {
    this.userUrl=this.urlServer;
  }



}
