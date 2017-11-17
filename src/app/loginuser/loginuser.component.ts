import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {ContextService} from '../shared/context/context.service';
import {LoginuserService} from '../shared/loginuser/loginuser.service';
import {Loginuser} from '../shared/loginuser';



@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  constructor(
    private loginuserService: LoginuserService,
    private router: Router,
    private contextService: ContextService
  ) { }
  loginuser : Loginuser = {
    login_user_id: 0,
    login_user_name: "",
    login_user_email: "",
    login_user_password: ""
  };
  ngOnInit() {
  }
  onSubmit()
  {

    this.loginuserService.createLoginuser(this.loginuser).then((loginuser) => {
      console.log("Successfully created");
      console.log(loginuser);

      // set the current company in the context
      this.contextService.currentLoginuser = this.loginuser;

      this.router.navigate(['/loginuser/' + loginuser.login_user_id + '/users']);
    });
  }
}
