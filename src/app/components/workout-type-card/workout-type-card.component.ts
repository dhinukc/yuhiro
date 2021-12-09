import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-type-card',
  templateUrl: './workout-type-card.component.html',
  styleUrls: ['./workout-type-card.component.scss'],
})
export class WorkoutTypeCardComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {}

}
