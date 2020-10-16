import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

const routes: Routes = [
  { path: 'cadastrar', component: UsersAddComponent },  
  { path: 'editar/:id', component: UsersEditComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}