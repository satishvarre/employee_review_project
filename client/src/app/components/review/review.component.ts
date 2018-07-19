import { Component, OnInit } from '@angular/core';
import { authService} from '../../services/auth.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public userData:any=[{name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333},
  {name:"satya",role:"admin",email:"satishascse@gmail.com",mobile:9581665333}
];
public ratting:any=[0,1,2,3,4];
public score:number;
public reviewData:any={};
  constructor(private authservice:authService) { }

  ngOnInit() {
  }
  review(event,index){
  
    var reviewclass:any=document.getElementsByClassName('fa-star ');
    for(var i=0;i<this.ratting.length;i++){
     reviewclass[i].classList.remove('rate');
    }
 
    for(var j=0;j<=index;j++){
      reviewclass[j].classList.add('rate');
    }
   this.score=index+1;
   }
   submit(){
    this.authservice.login(this.reviewData).subscribe(

      (response:any)=>{
  
      },
      (response:any)=>{
        
      }
    )   
  

   }
}
