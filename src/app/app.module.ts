import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import { WebcamModule } from 'ngx-webcam';
import { ApiServiceService} from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent
   
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule
  ],
  providers: [AuthenticationService, UserService, ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
