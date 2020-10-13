import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { selectUsers, selectUsersFeature, UsersState } from '../../store';
import * as fromActions from '../../store/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<Users[]>;

  constructor(private usersService: UsersService, private store: Store<UsersState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadUsers());
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.store.pipe(select(selectUsers))
  }

}
