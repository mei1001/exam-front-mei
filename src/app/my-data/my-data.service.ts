import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class MyDataService {

    name : string = "Name";
    email : string = "Email";
    number : string = "PhoneNumber";
    picture : string ="";
    UserList : object[] = [];

  constructor(private http : Http) { }

  GetAllUser() {
    this.http.get('https://randomuser.me/api/')
    .subscribe(
     result => {
     var user = result.json().results[0];
     this.name = user.name.first +' ' + user.name.last;
     this.email = user.email;
     this.number = user.phone;
     this.picture = user.picture.large;
       },
    error => {
      console.log(error);
      }   
    );

    this.http.get('https://randomuser.me/api/?results=15')
    .subscribe(
      result => {
        result.json().results.forEach(user => {
        this.UserList.push({
          "name" : user.name.first +' ' + user.name.last,
          "email" : user.email,
          "number" : user.phone
        });
      });
    },
    error => {
      console.log(error);
    }
  );
  }