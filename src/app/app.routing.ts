import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

import {ListUserComponent} from "./list-user/list-user.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-user', component: ListUserComponent }, 
  { path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
