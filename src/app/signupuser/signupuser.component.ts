import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Signupuser} from '../shared/signupuser';
import {SignupuserService} from '../shared/signupuser/signupuser.service';
import {ContextService} from '../shared/context/context.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {
  show_signup_form= true;
  show_signup_sad_path= false;
  show_signup_sad_path_for_different_password = false;
  signup_user_name;
  current_signup_password;
  current_signup_verify_password;
  constructor(
    private signupuserService: SignupuserService,
    private router: Router,
    private contextService: ContextService
  ) { }
  signupuser: Signupuser = {
    signup_user_id: 0,
    signup_user_name: '',
    signup_user_email: '',
    signup_user_password: '',
    signup_user_verify_password: '',
    signup_user_address: '',
    signup_user_phone_number: '',
  };
  ngOnInit() {
  }
  onSubmit() {
    this.show_signup_sad_path = false;
    this.show_signup_form = true;
    this.show_signup_sad_path_for_different_password = false;
    this.current_signup_password = this.signupuser.signup_user_password;
    this.current_signup_verify_password = this.signupuser.signup_user_verify_password;
    /*if (this.current_signup_password !== this.current_signup_verify_password) {
      this.show_signup_form = true;
      this.show_signup_sad_path_for_different_password = true;
      //this.router.navigate(['/signupuser' ]);
    }*/
    //this is a test commit 3
    //else if (this.current_signup_verify_password == this.current_signup_password) {
    this.signupuserService.createSignupuser(this.signupuser).then((signupuser) => {
      console.log('Successfully created');
      console.log(signupuser);

      // set the current company in the context
      this.contextService.currentSignupuser = signupuser;
      this.signup_user_name = signupuser.signup_user_name;
      if (this.signup_user_name == 'DuplicateUser' || this.current_signup_password !== this.current_signup_verify_password) {
          if (this.signup_user_name == 'DuplicateUser') {
            this.show_signup_form = true;
            this.show_signup_sad_path = true;
          }
          else if(this.current_signup_password !== this.current_signup_verify_password){
            this.show_signup_form = true;
            this.show_signup_sad_path_for_different_password = true;
          }
      }
      else if (this.show_signup_sad_path_for_different_password== false) {
        this.router.navigate(['/main']);
      }
    });
//}
  }

}
