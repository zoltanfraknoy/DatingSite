import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifyUserModalComponent } from '../modify-user-modal/modify-user-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {

  @Input()
  user: User;
  isUsable: boolean;
  pageReady: boolean;


  constructor(private userService: UserService, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
    this.isUsable = true;
    this.pageReady = false;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      switch (data.kind) {
        case 'ownProfile': {
          this.userService.getMyProfile().subscribe(u => {
            this.user = u;
            this.pageReady = true;
            if (u.gender == null) { this.isUsable = false; }
          });
          break;
        }
        case 'othersProfile':{
          this.userService.getUser(2).subscribe(u => {
            this.user = u;
            this.pageReady = true;
            if (u.gender == null) { this.isUsable = false; }
          });

        }
      }

    });

  }
  modify(): void {
    const modalRef = this.modalService.open(ModifyUserModalComponent);
    modalRef.componentInstance.user = this.user;
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}


