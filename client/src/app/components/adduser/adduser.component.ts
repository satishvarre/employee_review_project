import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { authService} from '../../services/auth.service'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  public user:any={};
  public queryParams:any;
  public iscreateMode:boolean=true;
  constructor( private _location: Location,private authservice:authService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchId();
  }


  save(){
    if(this.iscreateMode){
    this.authservice.newuser(this.user).subscribe(
      (response:any)=>{
        console.log(response);
        this._location.back();
      },
      (response:any)=>{
        
      }
    )
  }
  else{
    this.authservice.edituser(this.user).subscribe(
      (response:any)=>{
        console.log(response);
        this._location.back();
      },
      (response:any)=>{
        
      }
    )


  }
   
  }
  
  backClicked() {
    this._location.back();
  }
  

  fetchId() {
    this.route
      .queryParams
      .subscribe(params => {
        this.queryParams = params;
        this.getuser(this.queryParams.id)
          if(this.queryParams.id){
           this.iscreateMode=false;
          }
      });
  }
  getuser(id){
    var payload:any=
    {};
    payload.id=id
   this.authservice.getuser(payload).subscribe(
     (Response:any)=>{
      console.log(Response);
      this.user=Response;
     },
     (Response:any)=>{
       
    }
   )
  }
}
