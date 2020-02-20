import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, UserLogin} from '../interfaces/user';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  private readonly SERVER_URL = 'https://intense-meadow-41798.herokuapp.com/';

  currentUser$: Observable<User>;
  currentUserObj: User;
  currentUserId: number;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.currentUser$ = new Observable<User>(null);
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
  public isLogged(): boolean {
    return this.currentUserId !== undefined;
  }

  private getCurrentUser(): void {
    this.userService.getMyProfile().subscribe( data => { this.currentUserId = data.id; this.currentUserObj = data; },
                                              error => { // user not logged in, redirect
                                                this.router.navigateByUrl('/login/pleaseSignIn');
       }
    );
  }

  public signOut() {
    this.http.get<any>(this.SERVER_URL + 'logout', {withCredentials: true}).subscribe();
    this.currentUserId = undefined;
    this.router.navigateByUrl('/login/loggedOut');
  }
}
