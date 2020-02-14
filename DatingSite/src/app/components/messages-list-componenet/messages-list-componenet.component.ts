import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Subscription } from 'rxjs';
import{Messages} from 'src/app/interfaces/user';

@Component({
  selector: 'app-messages-list-componenet',
  templateUrl: './messages-list-componenet.component.html',
  styleUrls: ['./messages-list-componenet.component.scss']
})

export class MessagesListComponenetComponent implements OnInit, OnDestroy {
  messages: Messages[];
  messagesSubscription: Subscription;
  constructor(private messageService: MessagesService) {
    this.messages = [];
  }

  ngOnInit() {
    this.messagesSubscription = this.messageService.getMessages().subscribe(
      messages => {
        this.messages = messages;
      }
    );
  }
  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }
}