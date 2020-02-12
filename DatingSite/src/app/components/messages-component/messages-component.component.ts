import { Component, OnInit, Input } from '@angular/core';
import {Message} from 'src/app/interfaces/user';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages-component.component.html',
  styleUrls: ['./messages-component.component.scss']
})
export class MessagesComponentComponent implements OnInit {

@Input()
message: Message;

  constructor(private messageService: MessagesService) { }
  
  ngOnInit() {
  }

}
