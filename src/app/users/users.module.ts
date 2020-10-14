import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

@NgModule({
  declarations: [UsersListComponent, UsersAddComponent, UsersEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromUsers.usersesFeatureKey, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [UsersListComponent,UsersAddComponent]
})
export class UsersModule { }
