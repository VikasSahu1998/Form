import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WebLoginComponent } from './web-login/web-login.component';

const routes: Routes = [
  { 
    path: 'user', component: UserComponent 
  },
  { 
    path: '', component: WebLoginComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
