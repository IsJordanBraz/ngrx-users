import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, tap } from 'rxjs/operators';

import * as fromUsersActions from '../actions/user.actions';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.loadUsers),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(users => fromUsersActions.loadUsersSucess({ users })),
        catchError(error => of(fromUsersActions.loadUsersFailure({error})))
      ))
    )
  );

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.loadUser),
    mergeMap(action => this.usersService.getUser(action.id)
      .pipe(
        map(user => fromUsersActions.loadUserSuccess({  selectedUser: user })),
        catchError(error => of(fromUsersActions.loadUserFailure({error})))
      ))
    )
  );

  createUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsersActions.addUser),
      mergeMap(action =>
        this.usersService.createUser(action.user).pipe(
          map(user => fromUsersActions.addUserSuccess({ user })),
          catchError(error =>
            of(fromUsersActions.addUserFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/"]))
    )
  );

  updateUsers$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromUsersActions.updateUser),
      concatMap(action => this.usersService.updateUsers(
        action.user.id, 
        action.user.changes)
      ),
      tap(() => this.router.navigate(["/"]))
    ),
    { dispatch: false }
  )

  deleteUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromUsersActions.deleteUser),
    mergeMap(action => this.usersService.deleteUsers(action.id)
      .pipe(
        map(() => fromUsersActions.deleteUserSuccess({ id: action.id })),
        catchError(error => of(fromUsersActions.deleteUserFailure({error})))
      ))
    )
  );

  constructor(
    private actions$: Actions, 
    private usersService: UsersService,
    private router: Router
  ) {}

}
