import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import * as fromUsersActions from './user.actions';

@Injectable()
export class UserEffectEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.loadUsers),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(users => fromUsersActions.loadUsersSuccess({ users })),
        catchError(error => of(fromUsersActions.loadUsersFailure({error})))
      ))
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}

}
