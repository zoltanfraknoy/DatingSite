import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';
import {UserResponse} from '../interfaces/user-response';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: BehaviorSubject<User[]>;
  private readonly SERVER_URL = 'http://localhost:8080/rest/register';

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
  }

  addUser(usr: User): void {
    // írd át promiszra baszki
    this.http.post<UserResponse>(this.SERVER_URL, {user: usr}, {withCredentials: true})
      .subscribe();
  }
}
