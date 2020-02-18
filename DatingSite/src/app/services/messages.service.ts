import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';
import { map } from 'rxjs/operators';
import { Conversation } from '../interfaces/conversation';



@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  private readonly SERVER_URL = 'https://intense-meadow-41798.herokuapp.com/conversation';

  constructor(private http: HttpClient) {
  }

  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.SERVER_URL, { withCredentials: true });
  }

  public getConversation(id: number): Observable<Conversation> {
    return this.http.get<UserResponse>(
      this.SERVER_URL + '?id=' + id,
      { withCredentials: true }
    ).pipe(map(response => response.conversation[0]));
  }


}
