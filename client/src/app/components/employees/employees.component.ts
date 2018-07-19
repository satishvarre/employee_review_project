import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service'
import { Router} from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public userData: any = [];
  public deleteid: any = {};
  constructor(private authservice: authService,private router: Router) { }

  ngOnInit() {
    this.getusers();
  }

  delete() {

    this.authservice.deleteuser(this.deleteid).subscribe(

      (response: any) => {
        this.getusers();
      },
      (response: any) => {

      }
    )

  }
  ondelete(item) {
    this.deleteid = item
  }

  getusers() {
    this.authservice.getusers().subscribe(
      (response: any) => {
        this.userData = response;
      },
      (response: any) => {

      }
    )
  }
  edit(id) {
    console.log("hfghghf")
  this.router.navigate(['/adduser'], { queryParams: { id: id} });
  }

}
