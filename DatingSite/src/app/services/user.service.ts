import { Injectable } from '@angular/core';
import { User, UserLogin, Filter } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';
import { BehaviorSubject, Observable } from 'rxjs';
import { share, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<User[]>;
  private readonly SERVER_URL = 'https://intense-meadow-41798.herokuapp.com/';

  constructor(private http: HttpClient, private router: Router) {
    this.users = new BehaviorSubject([]);
  }



  addUser(usr: User): void {
    const json = JSON.stringify(usr);
    // írd át promiszra baszki
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.http.post<UserResponse>(this.SERVER_URL + "rest/register", json, { withCredentials: true, headers }).subscribe(
      data => { this.router.navigateByUrl('login/signUpSuccess'); }
    );
  }

  //Lekérjük a users tömböt
  getUsers(filter?: Filter): void {
    this.http.post<User[]>(
      this.SERVER_URL + "rest/profiles",
      filter,
      { withCredentials: true })
      .subscribe(resp => this.users.next(resp));
  }

  //Lekérünk 1 usert az ID alapján
  public getUser(id: number): Observable<User> {
    return this.http.get<User>(
      this.SERVER_URL + 'rest/getUser/' + id,
      { withCredentials: true }
    );
  }

  public getMyProfile(): Observable<User> {
    return this.http.get<User>(
      this.SERVER_URL + 'rest/getUser',
      { withCredentials: true }
    );
  }

  public modifyUser(usr: User): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const json = JSON.stringify(usr);
    return this.http.post(
      this.SERVER_URL + 'rest/updateUser', json,
      { withCredentials: true, headers }
    ).pipe(map((res: Response) => {
      return res.status <= 200 && res.status < 300;
    }));
  }

  public uploadImg(file: File): Observable<boolean> {
    const uploadData = new FormData();
    uploadData.append('file', file, file.name);
    return this.http.post(this.SERVER_URL + 'rest/updatepicture', uploadData, { withCredentials: true }
    ).pipe(map((res: Response) => {
      return res.status <= 200 && res.status < 300;
    }));
  }
}
