import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {ContextService} from '../shared/context/context.service';
import {LoginuserService} from '../shared/loginuser/loginuser.service';
import {Loginuser} from '../shared/loginuser';
import { MessageService } from '../_services/message.service';//new


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css'],
})
export class LoginuserComponent implements OnInit {
  received_data;
  logged_user;
  logged_user_name="no name";
  logged_user_company_list;
  send_data={Component: "", data: ""};
   show_form=true;
   show_login_msg=false;
   login_sad_path=false;
   login_happy_path=false;
    show_dashboard=false;
    show_logout_msg = false;
    show_companies=false;
    no_company=false;

  constructor(
    private loginuserService: LoginuserService,
    private router: Router,
    private messageService: MessageService //new
  ) {}


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
    this.show_form = false;
    this.show_login_msg=true;
    this.loginuserService.createLoginuser(this.loginuser).then((loginuser) => {
      this.received_data=loginuser;
      this.logged_user=this.received_data.login_user;
      this.logged_user_name=this.logged_user.user_name; // error dicche
      console.log("Successfully created");
      console.log(this.logged_user_name);


      if(this.logged_user_name != "InvalidUser" ){
        this.login_happy_path=true;
        this.login_sad_path=false;
        this.show_dashboard=true;
        this.logged_user_company_list=this.received_data.company_list;
        if(this.logged_user_company_list==null){this.no_company=true;}
        else{this.show_companies=true;}
        console.log(this.logged_user_company_list);
      }
      else {this.login_sad_path=true; this.show_form=true;}


   //  this.router.navigate(['/loggeduser']);
    });
  }
  //new
  click(){
    this.send_data.Component="EditProfile";
    this.send_data.data=this.logged_user;
    this.messageService.sendMessage(this.send_data);
    this.login_happy_path=false;
    this.show_companies=false;
    this.no_company=false;
    console.log("msg sent");
  }
  clickCompany(){
    this.send_data.Component="Company";
    this.send_data.data=this.logged_user;
    this.messageService.sendMessage(this.send_data);
    this.login_happy_path=false;
    console.log("msg sent");
    this.show_companies=false;
    this.no_company=false;
  }
  clickHome(){
    this.send_data.Component="";
    this.send_data.data="";
    this.messageService.sendMessage(this.send_data);
    if(this.logged_user_company_list==null){this.no_company=true;}
    else{this.show_companies=true;}
  }
  clickManageCompanies(){
    // for manage companies
  }
  //new
}


