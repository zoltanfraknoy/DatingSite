import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User, Filter } from 'src/app/interfaces/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit, OnDestroy {

  users: User[];
  usersSubscription: Subscription;
  @Input()
  search: Filter;

  constructor(private userService: UserService) {
    this.users = [];
    this.search;

   
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
