import { Injectable } from '@angular/core';
import {User, UserLogin} from '../interfaces/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserResponse} from '../interfaces/user-response';
import {BehaviorSubject, Observable} from 'rxjs';
import { share, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: BehaviorSubject<User[]>;
  private readonly SERVER_URL = 'http://localhost:8080/rest/';

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
  }



  addUser(usr: User): void {
    const json = JSON.stringify(usr);
    // írd át promiszra baszki
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.http.post<UserResponse>(this.SERVER_URL+"register", json, {withCredentials: true, headers}).subscribe();
  }

  loginUser(usr: UserLogin) {
    // TODO
    // login
    const loginData = new FormData();
    loginData.append('email', usr.email);
    loginData.append('password', usr.password);
    this.http.post<any>(this.SERVER_URL + '/login', loginData, {withCredentials: true}).subscribe(
      data => {
        //resault here example:
        // data.resault
        // save data to localStorge key / text or/maybe whatever
        // you can check it everywhere like this:  localStorage.getItem('currentUser');
        localStorage.setItem('currentUser', 'test');
        }, //
      error => {
        //error message
        console.log(error.message);
      }
    );
  }
//Lekérjük a users tömböt
  getUsers(): BehaviorSubject<User[]> {
    this.http.get<UserResponse>(
      this.SERVER_URL,
      //szűrés hogyan??? default? maximalizálni a kapott válaszokat?
       { withCredentials: true })
      .subscribe(resp => this.updateUsers(resp));
    return this.users;
  }

  //Ha a response sikeres frissítjük a változást
  private updateUsers(response: UserResponse) {
    if (response.success) {
      this.users.next(response.users);
    }
  }

  //Lekérünk 1 usert az ID alapján
  public getUser(id: number): Observable<User> {
    return this.http.get<UserResponse>(
      this.SERVER_URL + '?id=' + id,
      { withCredentials: true }
    ).pipe( map( response => response.users[0] ) );
  }
}
