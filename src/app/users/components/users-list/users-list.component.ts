import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../../store/interfaces/users';
import { UserState } from '../../../store/reducers/user.reducer';
import { loadUsers, deleteUser } from '../../../store/actions/user.actions';
import { selectUsers } from '../../../store/selectors/user.selectors';

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
