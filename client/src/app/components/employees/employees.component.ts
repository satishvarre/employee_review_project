import { Component, OnInit } from '@angular/core';
import { authService} from '../../services/auth.service'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public userData:any=[{name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333}
]
  constructor(private authservice:authService) { }

  ngOnInit() {
  }
  
  delete(){
    
  this.authservice.login('payload').subscribe(

    (response:any)=>{

    },
    (response:any)=>{
      
    }
  )
  }


}
