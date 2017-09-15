import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice/apiservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  NewUser = {
    'Id': Number,
    'Name': '',
    'Email': '',
    'Address': '',
    'Phone': ''
    
  };
  constructor(private apiservice: APIServiceService) { }

  ngOnInit() {
  }
  AddUser() {
    this.NewUser['Id'] = this.apiservice.UserList[this.apiservice.UserList.length - 1]['Id'] + 1;
    this.apiservice.UserList.push(this.NewUser);
  }
}