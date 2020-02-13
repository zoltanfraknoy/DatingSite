import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private userService: AuthenticationService, private router: Router) { }

  isLogged(): boolean {
    return this.userService.isLogged();
  }

  signOut(): void {
    this.userService.signOut();
  }

  ngOnInit() {
  }

}
