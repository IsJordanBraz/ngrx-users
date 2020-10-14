import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import * as fromUsersActions from './users.actions';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.loadUserss),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(userss => fromUsersActions.loadUserssSucess({ userss })),
        catchError(error => of(fromUsersActions.loadUserssFailure({error})))
      ))
    )
  );

  addUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.addUsers),
    mergeMap(action => this.usersService.createUser(action.users)
      .pipe(
        map(users => fromUsersActions.addUsersSuccess({ users })),
        catchError(error => of(fromUsersActions.addUsersFailure({error})))
      ))
    )
  );

  updateUsers$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromUsersActions.updateUsers),
      concatMap(action => this.usersService.updateUsers(action.users.id, action.users.changes)),
    ),
    { dispatch: false }
  )

  deleteUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.deleteUsers),
    mergeMap(action => this.usersService.deleteUsers(action.id)
      .pipe(
        map(() => fromUsersActions.deleteUsersSuccess({ id: action.id })),
        catchError(error => of(fromUsersActions.deleteUsersFailure({error})))
      ))
    )
  );

  constructor(
    private actions$: Actions, 
    private usersService: UsersService
  ) {}

}
