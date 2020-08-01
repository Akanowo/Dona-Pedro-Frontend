import {
  Component,
  OnInit
} from '@angular/core';
import { ICar } from './cars';
import { CarService } from './cars.service';
import { Router } from '@angular/router';
import { CarReserveService } from '../car-reserve/car-reserve-api.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cars-fleet',
  templateUrl: './cars-fleet.component.html',
  styleUrls: ['./cars-fleet.component.css']
})
export class CarsFleetComponent implements OnInit {
  cars: ICar[];
  constructor(private reserveCar: CarReserveService, private carService: CarService, private router: Router, 
              private http: HttpClient) {}

  getCars() {
    const endpoint = this.reserveCar.getUrl() + '/get-cars';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.get(endpoint, options).subscribe((response: ICar[]) => {
      this.cars = response;
      this.carService.cars = response;
    });
  }

  navigateDetails(id) {
    this.router.navigate(['/cars', id]);
  }


  ngOnInit(): void {
    this.getCars();
  }

}
