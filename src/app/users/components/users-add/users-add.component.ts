import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Store } from '@ngrx/store';
import { UsersService } from '../../services/users.service';
import { addUsers } from '../../store/users.actions';
import { UserState } from '../../store/users.reducer';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  constructor(private usersService: UsersService, private store: Store<UserState>) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.store.dispatch(addUsers({users: f.value}))
  }

}
