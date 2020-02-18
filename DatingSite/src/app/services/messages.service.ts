import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation } from '../interfaces/conversation';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';
import { map } from 'rxjs/operators';
import { ConversationResponse } from '../interfaces/conversation-response';


@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  private conversation: Observable<Conversation[]>;
  private readonly SERVER_URL = 'https://intense-meadow-41798.herokuapp.com/conversation';

  constructor(private http: HttpClient) {
    this.conversation = new Observable;
  }

  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.SERVER_URL, { withCredentials: true });
  }

  private updateConversation(response: ConversationResponse) {
    if (response.success) {
      this.conversation.next(response.conversation);
    }
  }

  public getConversation(id: number): Observable<Conversation> {
    return this.http.get<UserResponse>(
      this.SERVER_URL + '?id=' + id,
      { withCredentials: true }
    ).pipe(map(response => response.conversation[0]));
  }


}
