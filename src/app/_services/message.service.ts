import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
  public subject = new Subject<any>();

  sendMessage(message: string) {
    console.log('func started');
    console.log(message);
    this.subject.next({ any: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    console.log('getfunc started');
    return this.subject.asObservable();

  }
}
