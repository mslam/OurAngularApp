import { Injectable } from '@angular/core';

@Injectable()

export class AlertService {

  public alerts: Array<IAlert> = [];
  public display(type: string , message: string )
  {
    this.alerts = [{
      id: 1,
      type: type,
      message: message
    }];
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
