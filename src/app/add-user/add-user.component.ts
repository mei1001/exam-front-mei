import { Component, OnInit } from '@angular/core';
import { ApiService } from api/api.service;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  Name; Email; Address; Phone; Company;
}
