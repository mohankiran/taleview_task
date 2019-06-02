import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs,} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private headers: Headers = new Headers();
  private requestOptions: RequestOptionsArgs = {};
  private apiServer: string = "https://api.github.com";
  constructor(private http:HttpClient) { }


    createUrl(endPoint): string {

      let url = this.apiServer + endPoint;
      if (!endPoint.startsWith('/')) {
          url = this.apiServer + '/' + endPoint;
      }


      return url;
    }
    getRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

      this.requestOptions.headers = this.headers;
      if (options) {
          Object.assign(options, this.requestOptions);
      }

      return this.requestOptions;
    }
}
