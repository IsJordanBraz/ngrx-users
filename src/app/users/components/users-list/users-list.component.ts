import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/users';
import { UserState } from '../../store/user.reducer';
import { loadUsers, deleteUser } from '../../store/user.actions';
import { selectUsers } from '../../store/user.selecters';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.store.select(selectUsers);
  }

  deleteUsers(id: string) {
    this.store.dispatch(deleteUser({ id }))
  }

}
