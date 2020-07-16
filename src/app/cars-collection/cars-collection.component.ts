import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-collection',
  templateUrl: './cars-collection.component.html',
  styleUrls: ['./cars-collection.component.css']
})
export class CarsCollectionComponent implements OnInit {

  heading = 'Car Collection';
  constructor() { }

  ngOnInit(): void {
  }

}
