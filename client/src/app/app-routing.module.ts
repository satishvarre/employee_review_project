import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthGuard } from './auth_guard'
import { AdduserComponent } from './components/adduser/adduser.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', component: MainComponent,
        children: [
            { path: 'employees', component: EmployeesComponent },
              {path:'',redirectTo:'/employees', pathMatch: 'full'},
            { path: 'review', component: ReviewComponent },

        ],

    },
    {path:'adduser',component:AdduserComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }