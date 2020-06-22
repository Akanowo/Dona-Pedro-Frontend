import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-reserve',
  templateUrl: './car-reserve.component.html',
  styleUrls: ['./car-reserve.component.css']
})
export class CarReserveComponent implements OnInit {
  departure;
  destination;
  time;
  date;
  departureCar = 'Select a car';

  cars: Array<string> = ['Sedan', 'Mini SUV', 'Full SUV', 'Vans', 'Mini Bus', 'Coaster'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValues): void {
    console.log(formValues);
  }

}
