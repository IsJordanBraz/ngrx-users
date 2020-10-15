import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UsersService } from '../../services/users.service';
import { UserState } from '../../store/users.reducer';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  constructor(
    private usersService: UsersService, 
    private store: Store<UserState>,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    // this.store.dispatch(addUsers({users: f.value}))
  }

}
