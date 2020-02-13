import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, UserLogin} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  private readonly SERVER_URL = 'https://intense-meadow-41798.herokuapp.com/';

  currentUser$: BehaviorSubject<User>;
  currentUserId: number;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUser$ = new BehaviorSubject<User>(null);
    this.getCurrentUser();
  }

  login(usr: UserLogin): Observable<boolean> {

    const loginData = new FormData();
    loginData.append('email', usr.email);
    loginData.append('password', usr.password);

    return this.http.post(this.SERVER_URL + 'login', loginData, {withCredentials: true}).pipe( map( (res: Response) => {
      console.log(res);
      this.getCurrentUser();
      return res.status <= 200 && res.status < 300;
    }) );
  }
  private getCurrentUser(): void {
    this.http.get<any>(this.SERVER_URL + 'get', {withCredentials: true}).subscribe( res => {
      // if login has successfull, you receive ID in res body.
      this.currentUserId = res;
    },
    error => {
      // if not:
      console.log('user not logged in');
    }
    );
  }

  public isLogged(): boolean {
    return this.currentUserId === undefined ? false : true;
  }
}
