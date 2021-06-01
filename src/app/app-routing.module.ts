import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

 
const routes: Routes = [


    {
        path: 'home',
        component: HomeComponent
    },
   
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user2',
        component: User2Component
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'signup2',
        component: Register2Component
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }