import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../_services/index';
import { ConfigService } from '../_services/config.service';
import {LoginuserService} from '../shared/loginuser/loginuser.service';
@Component({
  selector: 'app-loggeduser',
  templateUrl: './loggeduser.component.html',
  styleUrls: ['./loggeduser.component.css'],
 //providers: [ConfigService]
})
export class LoggeduserComponent implements OnDestroy {
  message="no name";
  subscription: Subscription;
  public config;
  constructor(private messageService: MessageService,_configService: ConfigService) {
    // subscribe to home component messages
    this.config = _configService.getConfig();
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; console.log('subs started'); });
    console.log('getfunc called');
    console.log(this.message);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
  //  this.subscription.unsubscribe();
  }
}
