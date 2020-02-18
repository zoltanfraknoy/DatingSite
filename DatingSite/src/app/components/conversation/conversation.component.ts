import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import{Conversation} from 'src/app/interfaces/conversation';

@Component({
  selector: 'conversation-componenet',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})

export class ConversationComponent implements OnInit {
  messages: Conversation[];
  constructor(private messageService: MessagesService) {
    this.messages = [];
  }

  ngOnInit() {
    this.messageService.getConversations().subscribe(
      messages => {
        this.messages = messages;
      }
    );
  }
}