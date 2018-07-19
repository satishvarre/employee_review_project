import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { authService} from '../../services/auth.service'
@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public model:any={}
  constructor(private authservice:authService,private router: Router) { }

  ngOnInit() {
  }
 login(){
   console.log(this.model);

  this.authservice.login(this.model).subscribe(

    (response:any)=>{

    },
    (response:any)=>{
      
    }
  )

   this.router.navigate(['/'])
 }


}