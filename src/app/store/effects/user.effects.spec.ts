import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';

import { UsersService } from '../../users/services/users.service';
import { UsersEffects } from './user.effects';
import * as userActions from '../actions/user.actions';
import { initialState, UserState } from '../reducers/user.reducer';

const usersStub = [
  {
    id: '1',
    name: 'Jordan Braz',
    cpf: '150.150.150-50',
    email: 'jordan@email',
  },
  {
    id: '2',
    name: 'Jordan Paiva',
    cpf: '151.151.151-51',
    email: 'jordan2@email',
  }
];

class MockUserService {
  getProduto() {
    return of(usersStub);
  }
}

describe('UsersEffects', () => {
  let actions$: Observable<any>;
  let store: MockStore<UserState>;
  let effects: UsersEffects;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        UsersEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: service, useClass: MockUserService }
      ]
    });

    effects = TestBed.inject(UsersEffects);
    store = TestBed.inject(MockStore);
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should load users', (done) => {

    const spy = spyOn(service, 'getUsers').and.callThrough();

    actions$ = of(userActions.loadUsers);

    effects.loadUsers$.subscribe((res) => {
      expect(userActions.loadUsersSucess.type).toBe(res.type);
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('should load users with error', (done) => {

    const errorMessageExpeted = 'Failed to load';
    const spy = spyOn(service, 'getUsers').and.returnValue(throwError(errorMessageExpeted));

    actions$ = of(userActions.loadUsers);

    effects.loadUsers$.subscribe((res) => {
      expect(errorMessageExpeted).toBe(res.error);
      expect(userActions.loadUsersFailure.type).toBe(res.type);
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });

  });


});
