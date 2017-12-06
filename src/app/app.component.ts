import { Component } from '@angular/core';
import {AlertService, IAlert} from './shared/alert/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public alertService: AlertService){}
  title = 'app';
  public closeAlert(alert: IAlert) {
    const index: number = this.alertService.alerts.indexOf(alert);
    this.alertService.alerts.splice(index, 1);
  }
}
