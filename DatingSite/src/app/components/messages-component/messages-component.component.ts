import { Component, OnInit, Input } from '@angular/core';
import {Message} from 'src/app/interfaces/user';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages-component.component.html',
  styleUrls: ['./messages-component.component.scss']
})
export class MessagesComponentComponent implements OnInit {

@Input()
message: Message;

  constructor() { }
  
  ngOnInit() {
  }

}
