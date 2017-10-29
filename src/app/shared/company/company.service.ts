import { Injectable } from '@angular/core';
import {Company} from "../company";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }
  private url = 'http://localhost:3000/companies';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  createCompany(company : Company): Promise<Company> {

    console.log(company);

    return this.http
          .post(this.url, JSON.stringify(company), {headers: this.headers})
          .toPromise()
          .then(response => response.json() as Company)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
