import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreationEditionComponent } from './components/user-creation-edition/user-creation-edition.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/usuarios', pathMatch: 'full' },
  { path: 'admin/usuarios', component: UserListComponent },
  { path: 'admin/usuarios/usuario', component: UserCreationEditionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
