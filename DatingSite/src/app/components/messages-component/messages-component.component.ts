import { Component, OnInit, Input } from '@angular/core';
import {Messages} from 'src/app/interfaces/user';
import { MessagesService } from 'src/app/services/messages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages-component.component.html',
  styleUrls: ['./messages-component.component.scss']
})
export class MessagesComponentComponent implements OnInit {

@Input()
messages: Messages;

  constructor(private messagesService: MessagesService, private modalService: NgbModal) { }
  
  ngOnInit() {
  }

}
