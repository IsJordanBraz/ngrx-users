import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserEffectEffects } from './user-effect.effects';

describe('UserEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
