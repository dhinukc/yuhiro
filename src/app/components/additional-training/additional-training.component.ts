import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-training',
  templateUrl: './additional-training.component.html',
  styleUrls: ['./additional-training.component.scss'],
})
export class AdditionalTrainingComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {}

}
