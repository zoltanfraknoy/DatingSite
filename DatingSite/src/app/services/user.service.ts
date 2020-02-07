import { Injectable } from '@angular/core';
import {User, UserLogin} from '../interfaces/user';
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
    //const headers = { 'Content-Type': 'application/json'};
    //const JsonBodyForUser = [ 'name': usr.name, 'password': usr., 'email': 'tester@gmail.com', 'birthDate': '2020-02-05'];
    // írd át promiszra baszki
    this.http.post<UserResponse>(this.SERVER_URL, {JsonBodyForUser}, {headers}).subscribe();
  }

  loginUser(usr: UserLogin) {
    console.log('login try');
    // TODO
  }
}
