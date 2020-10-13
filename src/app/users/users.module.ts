import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUserState from './store';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffectEffects } from './store/user-effect.effects';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUserState.userStateFeatureKey, fromUserState.reducers, { metaReducers: fromUserState.metaReducers }),
    EffectsModule.forFeature([UserEffectEffects])
  ],
  exports: [UsersListComponent]
})
export class UsersModule { }
