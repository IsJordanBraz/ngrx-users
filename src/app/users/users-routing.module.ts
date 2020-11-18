import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

const routes: Routes = [
  { path: 'cadastrar', component: UsersAddComponent },
  { path: 'editar/:id', component: UsersEditComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
