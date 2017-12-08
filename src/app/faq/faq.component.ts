import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'; //new
import { MessageService } from '../_services/message.service';//new

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  message;//new
  subscription: Subscription;//new
  received_data={Component:null,data:null};
  ComponentName="Faq"; //id of the component


  constructor(      private messageService: MessageService ) { }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.received_data = message; console.log("received")});//new

  }

}
