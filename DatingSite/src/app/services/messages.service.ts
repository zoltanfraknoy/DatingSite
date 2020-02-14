import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Messages } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  private messages: BehaviorSubject<Messages[]>;
  private readonly SERVER_URL = 'https://intense-meadow-41798.herokuapp.com/conversation';

  constructor(private http: HttpClient) { 
    this.messages = new BehaviorSubject([]);
  }

  getMessages(): BehaviorSubject<Messages[]> {
    this.http.get<UserResponse>(this.SERVER_URL, {withCredentials: true})
      .subscribe(resp => this.updateMessages(resp));
    return this.messages;
  }

  private updateMessages(response: UserResponse) {
    if (response.success) {
      this.messages.next(response.messages);
    }
  }

  public getMessage(id: number): Observable<Messages> {
    return this.http.get<UserResponse>(
      this.SERVER_URL + '?id=' + id,
      { withCredentials: true }
    ).pipe( map( response => response.messages[0] ) );
  }


}
