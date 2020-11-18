import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { addUser } from '../../../store/actions/user.actions';
import { UserState } from '../../../store/reducers/user.reducer';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  constructor(private store: Store<UserState>) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.store.dispatch(addUser({ user: f.value }));
  };

}
