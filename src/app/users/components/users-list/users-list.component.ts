import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { UserState } from '../../store/users.reducer';
import { loadUserss, deleteUsers } from '../../store/users.actions';
import { selectUsers } from '../../store/users.selecters';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;
  // users$: Observable<User[]> = this.store.select(state => state.users);

  constructor(private usersService: UsersService, private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUserss());
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.store.pipe(select(selectUsers))
  }

  deleteUsers(id: string) {
    this.store.dispatch(deleteUsers({ id }))
  }

}
