import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-user-modal',
  templateUrl: './modify-user-modal.component.html',
  styleUrls: ['./modify-user-modal.component.scss']
})
export class ModifyUserModalComponent implements OnInit {
  closeResult: string;
  myForm: FormGroup;
  img: File;
  currentUser: User;
  pendingUpload: boolean;
  uploadSuccess: boolean;


  constructor(private modalService: NgbModal, private authService: AuthenticationService, private userService: UserService) {
    this.pendingUpload = false;
    this.uploadSuccess = false;
    this.currentUser = authService.currentUserObj;

  }

  onFileChanged(event) {
    this.img = event.target.files[0];
    this.pendingUpload = true;
    this.userService.uploadImg(this.img).subscribe(data => {
        this.pendingUpload = false;
        this.uploadSuccess = true;

        setTimeout(() => {
          this.modalService.dismissAll('process finished');
        }, 1500);
      }, error => {
        this.pendingUpload = false;
        this.uploadSuccess = true;
        setTimeout(() => {
          this.modalService.dismissAll('process finished');
        }, 1500);
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      interest: new FormControl(this.currentUser.interest),
      minAge: new FormControl(this.currentUser.minAge),
      maxAge: new FormControl(this.currentUser.maxAge),
      gender: new FormControl(this.currentUser.gender),
      aboutMe: new FormControl(this.currentUser.aboutMe),
      city: new FormControl(this.currentUser.city),
      bodyShape: new FormControl(this.currentUser.bodyShape),
      horoscope: new FormControl(this.currentUser.horoscopeEnum),
      eyeColor: new FormControl(this.currentUser.eyeColor),
      hairColor: new FormControl(this.currentUser.hairColor),
      smoking: new FormControl(this.currentUser.smoking),
      birthDate: new FormControl(this.currentUser.birthDate),
      likesMovies: new FormControl(this.currentUser.likesMovies),
      likesSports: new FormControl(this.currentUser.likesSports),
      likesMusic: new FormControl(this.currentUser.likesMusic),
      likesBooks: new FormControl(this.currentUser.likesBooks),
      likesCulture: new FormControl(this.currentUser.likesCulture),
      likesTravel: new FormControl(this.currentUser.likesTravel),
      likesTechnology: new FormControl(this.currentUser.likesTechnology),
      likesPolitics: new FormControl(this.currentUser.likesPolitics),
    });
  }

  onSubmit() {
    this.userService.modifyUser(this.myForm.value).subscribe();
    this.modalService.dismissAll('process finished');
  }


}
