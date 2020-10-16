import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/users';
import { loadUser, updateUser } from '../../store/user.actions';
import { UserState } from '../../store/user.reducer';
import { selectedUser } from '../../store/user.selecters';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  model: any;
  user$: Observable<User>

  constructor(
    private route: ActivatedRoute,
    private store: Store<UserState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadUser({ id: this.route.snapshot.paramMap.get("id") }));

    this.user$ =  this.store.pipe(select(selectedUser));
    
    this.store.pipe(select(selectedUser)).subscribe(user => 
      this.model = user
    );
    
  }

  onSubmit(f: NgForm) {

    let userId= {
      "id": this.model[0].id
    }

    let totalteste = Object.assign(userId, f.value );

    const update: Update<User> = {
      id: this.route.snapshot.paramMap.get("id"),
      changes: totalteste
    }
    
    this.store.dispatch(updateUser({ user: update }))
  }

}
