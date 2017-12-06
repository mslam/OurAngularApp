import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Signupuser} from "../shared/signupuser";
import {SignupuserService} from "../shared/signupuser/signupuser.service";
import {ContextService} from '../shared/context/context.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {
  constructor(
    private signupuserService: SignupuserService,
    private router: Router,
    private contextService: ContextService
  ) { }
  signupuser : Signupuser = {
    signup_user_id: 0,
    signup_user_name: "",
    signup_user_email: "",
    signup_user_password: "",
    signup_user_address: "",
    signup_user_phone_number: "",
    signup_user_birth_date: ""
  };
  ngOnInit() {
  }
  onSubmit()
  {

    this.signupuserService.createSignupuser(this.signupuser).then((signupuser) => {
      console.log("Successfully created");
      console.log(signupuser);

      // set the current company in the context
      this.contextService.currentSignupuser = signupuser;

      this.router.navigate(['/main' ]);
    });
  }

}
