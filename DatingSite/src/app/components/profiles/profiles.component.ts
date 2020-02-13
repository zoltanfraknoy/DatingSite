import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Filter } from 'src/app/interfaces/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit, OnDestroy {

  users: User[];
  usersSubscription: Subscription;

  constructor(private userService: UserService) {
    this.users = [];

  }
  //Feliratkozunk a service getUsers metódusára és megkapunk egy csini users tömböt
  ngOnInit() {
    this.usersSubscription = this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );

  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  doSearch(filter: Filter) {
    //feliratkozni
    this.userService.getUsers(filter).subscribe(users => {
    this.users = users;
    }
    );
  }

}
