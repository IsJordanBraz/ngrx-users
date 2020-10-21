import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersEffects } from './user.effects';

describe('UsersEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        UsersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
