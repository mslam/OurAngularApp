import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AlertService} from "../alert/alert.service";


@Injectable()
export class AccountService {

  constructor(private http: Http,
              public alertService: AlertService) { }
  private baseUrl = 'http://localhost:3000/companies/';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  getNodes(company_id: number) {

    var url = this.baseUrl + company_id + '/nodes';
    console.log(url);

    return this.http
        .get(url, {headers: this.headers})
        .toPromise()
        .then(response => response.json())
        .catch(response => {
          var message = response.json().message;
          console.log(response.json().message);
          this.alertService.display('danger', message);
          return Promise.reject(message);
        });
  }
}
