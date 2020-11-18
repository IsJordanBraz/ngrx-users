import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEffects } from '../store/effects/user.effects';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import * as fromUsers from '../store/reducers/user.reducer';

@NgModule({
  declarations: [UsersListComponent, UsersAddComponent, UsersEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromUsers.usersesFeatureKey, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [UsersListComponent,UsersAddComponent, UsersEditComponent]
})
export class UsersModule { }
