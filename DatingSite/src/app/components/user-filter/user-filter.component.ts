import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Filter } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  @Input()
  user: User;
  form: FormGroup;

  @Output()
  search: EventEmitter<Filter>;

  constructor(private userService: UserService, private fb: FormBuilder) {

    this.form = new FormGroup(
      {

        ownGender: new FormControl('Male'),
        targetGender: new FormControl('Female'),
        ageMin: new FormControl(18),
        ageMax: new FormControl(36)
      }
    );
      this.search = new EventEmitter();

  }

  ngOnInit() {
    this.userService.getMyProfile().subscribe(u => {
      this.user = u;
      this.form.controls['ageMin'].setValue(this.user.minAge);
      this.form.controls['ageMax'].setValue(this.user.maxAge);
      this.form.controls['ownGender'].setValue(this.user.gender);
      this.form.controls['targetGender'].setValue(this.user.interest);
    });
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({

    });
  }

  onSearchClick(): void {
    const f: Filter = {

    };
    this.search.emit(f);
  }

}
