import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  myForm: FormGroup;
  userlogin: UserLogin;


  constructor(private userService: UserService) {
    this.userlogin = {
      email: '',
      password: '',
    };
  }

  onSubmit(): boolean {
    if (this.myForm.valid) {
      this.userService.loginUser(this.myForm.value);
    } else {
      return false;
    }
  }


  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(this.userlogin.email, [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl(this.userlogin.password, Validators.required),
    });
  }

}
