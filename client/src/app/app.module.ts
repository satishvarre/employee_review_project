import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth_guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ReviewComponent } from './components/review/review.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { authService} from './services/auth.service'
// import {employee} from './services/employee.sevice'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EmployeesComponent,
    ReviewComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AuthGuard,authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
