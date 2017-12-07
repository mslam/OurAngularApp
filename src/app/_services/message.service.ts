import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()

export class MessageService {


 // subject: Subject<any> = new Subject<any>();
 // observable: Observable<any> = this.subject.asObservable();

  private subject = new Subject<any>();

  sendMessage(message: any) {
    this.subject.next( message );
    console.log('msg sent');
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() {}
}
