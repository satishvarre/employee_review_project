import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public userData: any = [];
  public ratting: any = [0, 1, 2, 3, 4];
  public score: number;
  public reviewData: any = {};
  constructor(private authservice: authService) { }

  ngOnInit() {
    this.getusers();
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

  empid(id) {
    console.log(id);
    this.reviewData._id = id;
  }
  review(event, index) {

    var reviewclass: any = document.getElementsByClassName('fa-star ');
    for (var i = 0; i < this.ratting.length; i++) {
      reviewclass[i].classList.remove('rate');
    }

    for (var j = 0; j <= index; j++) {
      reviewclass[j].classList.add('rate');
    }
    this.score = index + 1;
    this.reviewData.ratting=this.score;
  }
  submit() {
    this.authservice.Review(this.reviewData).subscribe(

      (response: any) => {
        console.log(response);
      },
      (response: any) => {

      }
    )


  }
}
