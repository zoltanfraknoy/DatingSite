import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFilterService {



  userFilterForm = new FormGroup({
    searcherGender: new FormControl(''),
    targetGender: new FormControl(''),
    targetAgeMin: new FormControl(''),
    targetAgeMax: new FormControl('')
  });

  constructor() { }



}

