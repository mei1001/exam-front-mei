import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MyDataService } from "./my-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = "Name";
  email : string = "Email";
  number : string = "PhoneNumber";
  picture : string ="";
  UserList : object[] = [] ;

  constructor(private http: Http, private data: MyDataService) {
  }

  PostData(){

  var body = JSON.stringify({
    "email" : "sydney@fife"
});
  var hd = new Headers ({"Content-Type" : "application/json"});
  var options = new RequestOptions({ headers : hd });

  this.http.post("https://reqres.in/api/register", body, options)
  .subscribe(
    result =>{
      console.log(result.json())
    },
    error=>{
      console.log(error)
    }
  );
};
RefreshData() :void{
return this.data.GetAlluser();
 }

}


