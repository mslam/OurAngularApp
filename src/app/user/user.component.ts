import { Component, OnInit } from '@angular/core';
import {ContextService} from "../shared/context/context.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public contextService: ContextService) { }


  ngOnInit() {
  }

}
