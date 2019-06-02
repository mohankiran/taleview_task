import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../model/user.model";
import { Irepos } from "../service/Irepos"
import { ApiServiceService} from "../api-service.service";

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private api: ApiServiceService) { }
  baseUrl: string;
  userName : String;
    getUsers() {
     return this.http.get(this.baseUrl);
    }
    authenticateUser(userName) {
    
      this.baseUrl="";
      this.baseUrl =  'https://api.github.com/users'+"/"+userName;
      return this.http.get(this.baseUrl);
    }
    getRepos(): Observable<Irepos[]> {
      this.baseUrl="";
      this.baseUrl =  'https://api.github.com/users/mohankiran'+"/"+"repos";
      return this.http.get<Irepos[]>(this.baseUrl);
    }

    saveImage(image) {
      this.http.post('https://api.github.com/users/mohankiran/repos',image,{
        headers:new HttpHeaders({
          'content-type':'application/json'
        })
      })
    }
}
