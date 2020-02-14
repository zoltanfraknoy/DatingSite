import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User, UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  myForm: FormGroup;
  userlogin: UserLogin;
  errorMessage: string;
  showLoggedOutMessage: boolean;
  showSignUpMessage: boolean;
  showErrorMessage = false;
  pendingProcess = false;

  constructor(private userService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
    this.userlogin = {
      email: '',
      password: '',
    };
    this.errorMessage = '';
    this.pendingProcess = false;
    this.showLoggedOutMessage = this.route.snapshot.data && this.route.snapshot.data.showLoggedOutMessage;
    this.showSignUpMessage = this.route.snapshot.data && this.route.snapshot.data.showSignUpMessage;
  }

  onSubmit(): boolean {
    if (this.myForm.valid) {
      this.pendingProcess = true;
      this.errorMessage = '';
      this.userService.login(this.myForm.value).subscribe(
        () => { this.router.navigate(['profiles', 'myProfile']); },
          () => { this.errorMessage = 'Invalid e-mail, or password!'; this.showErrorMessage = true; this.pendingProcess = false;});

    } else {
      return false;
    }
  }

  isLogged(): string {
    if (this.userService.isLogged()) {
      return 'true';
    } else {
      return 'false';
    }
    }
  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(this.userlogin.email, [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl(this.userlogin.password, Validators.required),
    });
  }
}
