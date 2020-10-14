import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersAddComponent } from './components/users-add/users-add.component';

const routes: Routes = [
  { path: 'cadastrar', component: UsersAddComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}