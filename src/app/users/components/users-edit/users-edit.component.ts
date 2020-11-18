import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';

import { User } from '../../../store/interfaces/users';
import { loadUser, updateUser } from '../../../store/actions/user.actions';
import { UserState } from '../../../store/reducers/user.reducer';
import { selectedUser } from '../../../store/selectors/user.selectors';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  selectedUser: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<UserState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUser({ id: this.route.snapshot.paramMap.get('id') }));
    this.store.select(selectedUser).subscribe(user => this.selectedUser = user);
  }

  onSubmit(form: NgForm) {
    const update: Update<User> = {
      id: this.selectedUser.id,
      changes: form.value
    };

    this.store.dispatch(updateUser({ user: update }));
  }
}
