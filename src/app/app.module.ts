import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { APIServiceService } from "./apiservice/apiservice.service";
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot ([
      {path : '', component : AddUserComponent},
      {path : 'mycomponent',component : UserListComponent}
    ])
  ],
  providers: [ APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }