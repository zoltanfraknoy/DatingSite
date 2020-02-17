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

  constructor(private userService: AuthenticationService) {
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
    console.log(this.myForm);
  }

  ngOnInit() {

    this.myForm = new FormGroup({
      myGender: new FormControl(this.firstStep.gender),
      aboutMe: new FormControl(this.firstStep.aboutMe),
      interestedGender: new FormControl(this.firstStep.interestedGender),
      preferenceFrom: new FormControl(this.firstStep.interestedAgeFrom),
      preferenceUntil: new FormControl(this.firstStep.interestedAgeUntil)
    });


  }
}
