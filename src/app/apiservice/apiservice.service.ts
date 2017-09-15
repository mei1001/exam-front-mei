import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class APIServiceService {
  Name: String = "-";
  Email: String = "-";
  Phone: String = "-";
  Address : String ="";
  UserList: object[] = [];
  constructor(private http:Http) { }
  RefreshData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {
        for (var i = 0; i< result.json().length; i++){
          var user = result.json()[i];
          var UserObj = {
            'id' : user.id,
            'Name' : user.name,
            'Email' : user.email,
            'Phone' : user.phone,
            'Address' : user.address.street
          };
          this.UserList.push(UserObj);
        }
        
      },
      error => { 
        console.log(error);
      }
    );
    
  }
RemoveData(id){
  for (var i = 0; i< this.UserList.length; i ++){
    if(this.UserList[i]["id"]== id){
      this.UserList.splice(i,1);
    }
  }
}



}