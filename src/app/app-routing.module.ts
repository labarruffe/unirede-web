import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/usuarios', pathMatch: 'full' },
  { path: 'admin/usuarios', component: UserListComponent },
  { path: 'admin/usuarios/criar', component: UserCreationComponent},
  // { path: '/admin/usuarios/detalhes/:id', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
