import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {FirstStep} from '../../interfaces/user';

@Component({
  selector: 'app-firststeps',
  templateUrl: './firststeps.component.html',
  styleUrls: ['./firststeps.component.scss']
})
export class FirststepsComponent implements OnInit {

  myForm: FormGroup;
  firstStep: FirstStep;
  showErrorMessage: boolean;
  errorMessage: string;

  constructor(private userService: AuthenticationService) {
    this.showErrorMessage = false;
    this.errorMessage = '';
    this.firstStep = {
      picture: '',
      gender: '',
      aboutMe: '',
      interestedGender: '',
      interestedAgeFrom: '',
      interestedAgeUntil: '',
    };
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('OK');
    } else {
      this.showErrorMessage = true;
      this.errorMessage = 'We don\'t know your gender. Please pick your gender for continue.';
    }
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      myGender: new FormControl(this.firstStep.gender, Validators.required),
      aboutMe: new FormControl(this.firstStep.aboutMe),
      interestedGender: new FormControl(this.firstStep.interestedGender),
      preferenceFrom: new FormControl(this.firstStep.interestedAgeFrom),
      preferenceUntil: new FormControl(this.firstStep.interestedAgeUntil)
    });
  }
}
