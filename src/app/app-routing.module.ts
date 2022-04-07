import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent} from './pages/login/login.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {
    path: '',redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'new', component:NewComponent,canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id', component:EditComponent,canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NewComponent,EditComponent]