import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-firststeps',
  templateUrl: './firststeps.component.html',
  styleUrls: ['./firststeps.component.scss']
})
export class FirststepsComponent implements OnInit {

  myForm: FormGroup;
  firstModify: User;
  showErrorMessage: boolean;
  errorMessage: string;
  img: File;
  currentUser: User;

  pendingUpload: boolean;
  uploadSuccess: boolean;

  constructor(private authService: AuthenticationService, private userService: UserService, private router: Router) {
    this.showErrorMessage = false;
    this.pendingUpload = false;
    this.uploadSuccess = false;
    this.errorMessage = '';
    this.firstModify = {
      birthDate: '', email: '', name: '', password: '',
      imgUrl: '',
      gender: '',
      aboutMe: '',
      interest: '',
      minAge: 18,
      maxAge: 80
    };
  }

  onFileChanged(event) {
    this.img = event.target.files[0];
    this.pendingUpload = true;
    this.userService.uploadImg(this.img).subscribe(data => {
        this.pendingUpload = false;
        this.uploadSuccess = true;
      }, error => {
        this.pendingUpload = false;
        this.uploadSuccess = true;
      }
      );
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.userService.modifyUser(this.myForm.value).subscribe(
        success => {
                        //success modify, redirect:
                        this.router.navigate(['profiles', 'myProfile' , 'successFirstSetup']);
                        },
        error => { console.log('nem'); }
      );
    } else {
      this.showErrorMessage = true;
      this.errorMessage = 'We don\'t know your gender. Please pick your gender for continue.';
    }
    this.refreshUserData();
  }

  refreshUserData(): void {
    this.userService.getMyProfile().subscribe( data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      gender: new FormControl(this.firstModify.gender, Validators.required),
      aboutMe: new FormControl(this.firstModify.aboutMe),
      interest: new FormControl(this.firstModify.interest),
      minAge: new FormControl(this.firstModify.minAge),
      maxAge: new FormControl(this.firstModify.maxAge)
    });
    this.refreshUserData();
  }
}
