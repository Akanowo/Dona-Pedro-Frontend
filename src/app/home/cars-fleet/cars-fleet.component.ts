import {
  Component,
  OnInit
} from '@angular/core';
import { ICar } from './cars';
import { CarService } from './cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-fleet',
  templateUrl: './cars-fleet.component.html',
  styleUrls: ['./cars-fleet.component.css']
})
export class CarsFleetComponent implements OnInit {
  cars: ICar[];
  constructor(private carService: CarService, private router: Router) {}

  getCars() {
    this.cars = this.carService.getCars();
  }

  navigateDetails(id) {
    this.router.navigate(['/cars', id]);
  }


  ngOnInit(): void {
    this.getCars();
  }

}
