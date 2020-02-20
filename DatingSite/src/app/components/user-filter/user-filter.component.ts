import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Filter, Gender } from 'src/app/interfaces/user';
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
  numberPage: number;
  agePicker: number[];

  @Output()
  search: EventEmitter<Filter>;

  constructor(private userService: UserService, private fb: FormBuilder) {

    this.form = new FormGroup(
      {
        ownGender: new FormControl('Man'),
        targetGender: new FormControl('Woman'),
        ageMin: new FormControl(18),
        ageMax: new FormControl(36),
      }
    );
    this.search = new EventEmitter();

    this.agePicker = [];

    for (let i = 18; i <= 80; i++) {
      this.agePicker.push(i);
    }

  }

  ngOnInit() {

    this.userService.getMyProfile().subscribe(u => {
      this.user = u;
      this.form.controls['ageMin'].setValue(this.user.minAge);
      this.form.controls['ageMax'].setValue(this.user.maxAge);
      this.form.controls['ownGender'].setValue(this.user.gender);
      this.form.controls['targetGender'].setValue(this.user.interest);

    });

  }

  onSearchClick(): void {
    const f: Filter = {
      minAge: this.form.controls['ageMin'].value,
      maxAge: this.form.controls['ageMax'].value,
      lookingFor: this.form.controls['targetGender'].value,
      numberPage: 1

    };
    this.search.emit(f);


    console.log(f.lookingFor);
    console.log(f.maxAge);
    console.log(f.minAge);
    console.log(f.numberPage);
  }

}
