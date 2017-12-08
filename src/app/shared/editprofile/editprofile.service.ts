import { Injectable } from '@angular/core';
import {Signupuser} from "../signupuser";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AlertService} from "../alert/alert.service";

@Injectable()
export class EditprofileService {

  constructor(private http: Http,
              public alertService: AlertService) { }
  private url = 'http://localhost:3000/edituser';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  createEditprofile(signupuser : Signupuser): Promise<Signupuser> {

    console.log(signupuser);

    return this.http
      .post(this.url, JSON.stringify(signupuser), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Signupuser)
      .catch(response => {
        var message = response.json().message;
        console.log(response.json().message);
        this.alertService.display('danger', message);
        return Promise.reject(message);
      });
  }
}
