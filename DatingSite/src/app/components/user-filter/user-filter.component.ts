import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  @Input()
  user: User;
  form: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {




  }

  ngOnInit() {
    this.userService.getMyProfile().subscribe(u => this.user = u);
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      
    });
  }

}
