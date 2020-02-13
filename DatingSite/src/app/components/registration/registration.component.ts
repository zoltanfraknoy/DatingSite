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
  passWdForValid: string;
  myDatepicker: any;

  constructor(private userService: UserService, private router: Router) {
    this.user = {
      name: '',
      email: '',
      password: '',
      birthDate:''
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
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email,
        [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      ),
      birthDate: new FormControl(this.user.birthDate, Validators.required),
      password: new FormControl(this.user.password, Validators.required),
      passWd2: new FormControl(this.passWdForValid, Validators.required),
    });
  }
}
