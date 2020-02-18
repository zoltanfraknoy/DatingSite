import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Conversation } from 'src/app/interfaces/conversation';


@Component({
  selector: 'conversation-component',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})

export class ConversationComponent implements OnInit {
  conversations: Conversation[];
  constructor(private messageService: MessagesService) {
    this.conversations = [];
  }

  ngOnInit() {
    this.messageService.getConversations().subscribe(
      conversations => {
        this.conversations = conversations;
      }
    );
  }
}