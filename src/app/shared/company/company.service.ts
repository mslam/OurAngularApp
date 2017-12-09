import { Injectable } from '@angular/core';
import {Company} from "../company";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AlertService} from "../alert/alert.service";
import { environment } from '../environments/environment';

@Injectable()
export class CompanyService {

  constructor(private http: Http,
              public alertService: AlertService) { }
  private url = 'http://localhost:3000/companies';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  createCompany(company : Company): Promise<Company> {

    console.log(company);

    return this.http
          .post(this.url, JSON.stringify(company), {headers: this.headers})
          .toPromise()
          .then(response => response.json() as Company)
          .catch(response => {
            var message = response.json().message;
            console.log(response.json().message);
            this.alertService.display('danger', message);
            return Promise.reject(message);
          });
  }
}
