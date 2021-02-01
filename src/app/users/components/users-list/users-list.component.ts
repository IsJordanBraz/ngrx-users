import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  loading$: Observable<boolean>;
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = userService.entities$;
    this.loading$ = userService.loading$;
   }

  ngOnInit(): void {
    this.userService.getAll();
  }

  deleteUsers(id: string | number) {
    this.userService.delete(id);
  }
}
