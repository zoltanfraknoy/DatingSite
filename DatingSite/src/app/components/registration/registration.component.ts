import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: User;
  myForm: FormGroup;

  passWdIsValid: true;

  passWdForValid: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = {
      nickName: '',
      eMail: '',
      passWd: '',
    };
  }

  onSubmit(): boolean {
    if (this.myForm.valid) {
      this.userService.addUser(this.myForm.value);
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      nickName: new FormControl(this.user.nickName, Validators.required),
      eMail: new FormControl(this.user.eMail,
        [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      ),
      passWd: new FormControl(this.user.passWd, Validators.required),
      passWd2: new FormControl(this.passWdForValid, Validators.required),
    });
  }
}
