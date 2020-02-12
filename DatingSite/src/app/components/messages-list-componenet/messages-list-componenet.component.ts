import { Component, OnInit } from '@angular/core';
import {Message} from 'src/app/interfaces/user';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages-list-componenet',
  templateUrl: './messages-list-componenet.component.html',
  styleUrls: ['./messages-list-componenet.component.scss']
})
export class MessagesListComponenetComponent implements OnInit {

  messeage: Message [];

  constructor(private messageService: MessagesService) { 
    this.messeage =[];
  }

  ngOnInit() {
  }

}
