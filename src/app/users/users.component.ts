import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  resetForm() {
    this.userForm.reset();
  }

  submit() {
    if (this.userForm.invalid) {
      this.userForm.markAsTouched();
    } else {
    }
  }

}
