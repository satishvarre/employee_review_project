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
  constructor( private _location: Location,private authservice:authService) { }

  ngOnInit() {
  }


  save(){
    this.authservice.adduser(this.user).subscribe(
      (response:any)=>{

      },
      (response:any)=>{
        
      }
    )
    this._location.back();
  }
  
  backClicked() {
    this._location.back();
  }
  
}
