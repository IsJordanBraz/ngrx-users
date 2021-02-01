import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent {

  constructor(private userService: UserService) {}

  onSubmit(f: NgForm) {
    this.userService.add(f.value);
  };
}
