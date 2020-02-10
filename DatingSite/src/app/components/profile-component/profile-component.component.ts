import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {

  @Input()
  user: User;



  constructor( private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  modify(): void {
    const modalRef = this.modalService.open(ModifyUserModalComponent);
    modalRef.componentInstance.user = this.user;
  }

}
