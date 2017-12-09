import { Injectable } from '@angular/core';
import {Loginuser} from "../loginuser";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AlertService} from "../alert/alert.service";
import {environment} from '../../../environments/environment';

@Injectable()
export class LoginuserService {

  constructor(private http: Http,
              public alertService: AlertService) { }
  private url = environment.apiBase + '/loginuser';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  createLoginuser(loginuser : Loginuser): Promise<Loginuser> {

    console.log(loginuser);

    return this.http
          .post(this.url, JSON.stringify(loginuser), {headers: this.headers})
          .toPromise()
          .then(response => response.json() as Loginuser)
          .catch(response => {
            var message = response.json().message;
            console.log(response.json().message);
            this.alertService.display('danger', message);
            return Promise.reject(message);
          });
  }
}
