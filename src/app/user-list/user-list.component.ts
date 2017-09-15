import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { APIServiceService } from '../apiservice/apiservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Name : String ="";
  Email : String = "";
  Phone : String = "";
  Address : String = "";
  UserList : object[] = [];

  constructor(private http:Http,private data : APIServiceService) { }

  ngOnInit() {
    return this.data.RefreshData();
  }

  DeleteToDo(i){
 this.data.RemoveData(i);
  }
}