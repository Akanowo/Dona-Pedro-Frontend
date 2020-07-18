import {
  Component,
  OnInit
} from '@angular/core';
import { ICar } from './cars';
import { CarService } from './cars.service';

@Component({
  selector: 'app-cars-fleet',
  templateUrl: './cars-fleet.component.html',
  styleUrls: ['./cars-fleet.component.css']
})
export class CarsFleetComponent implements OnInit {
  cars: ICar[];
  constructor(private carService: CarService) {}

  getCars() {
    this.cars = this.carService.getCars();
  }


  ngOnInit(): void {
    this.getCars();
  }

}
