import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Signupuser} from '../shared/signupuser';
import {SignupuserService} from '../shared/signupuser/signupuser.service';
import {ContextService} from '../shared/context/context.service';
import { Subscription } from 'rxjs/Subscription'; //new
import { MessageService } from '../_services/message.service';//new

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  message;//new
  subscription: Subscription;//new

  show_signup_form= true;
  show_signup_sad_path= false;
  show_signup_sad_path_for_different_password = false;
  signup_user_name;
  current_signup_password;
  current_signup_verify_password;
  constructor(
    private signupuserService: SignupuserService,
    private router: Router,
    private contextService: ContextService,
    private messageService: MessageService //new
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
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; console.log("received")});//new

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
