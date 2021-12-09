import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  workoutTypes = [];
  additionalTrainings = [];

  constructor() { }

  ngOnInit() {
    this.workoutTypes = [{image: '../../../assets/images/img_9.jpg', name: 'Hiit', section: '12'},{image: '../../../assets/images/img_8.jpg', name: 'Amrap', section: '15'},{image: '../../../assets/images/img_7.jpg', name: 'Swim', section: '20'},{image: '../../../assets/images/img_6.jpg', name: 'Biking', section: '10'},{image: '../../../assets/images/img_5.jpg', name: 'Climp', section: '12'},]

    this.additionalTrainings = [{image: '../../../assets/images/img_13.jpg', name: 'Hiit', section: '12'},{image: '../../../assets/images/img_12.jpg', name: 'Amrap', section: '15'},{image: '../../../assets/images/img_11.jpg', name: 'Swim', section: '20'},{image: '../../../assets/images/img_10.jpg', name: 'Biking', section: '10'},{image: '../../../assets/images/img_9.jpg', name: 'Climp', section: '12'},]
  }

}
