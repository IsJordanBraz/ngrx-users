import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  selectedUser: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getByKey(this.route.snapshot.paramMap.get('id')).subscribe(
      user => this.selectedUser = user);
  }

  onSubmit(form: NgForm) {
    const updatedUser: User = {
      id: this.selectedUser.id,
      name: form.value.name,
      cpf: form.value.cpf,
      email: form.value.email
    };

    this.userService.update(updatedUser);
  }
}
