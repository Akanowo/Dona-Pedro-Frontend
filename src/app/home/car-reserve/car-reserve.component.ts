import { Component, OnInit } from '@angular/core';
import { CarReserveService } from './car-reserve-api.service';
import { IReserve } from './car-reserve-api.model';
import { ICars } from './cars.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
  carCategory;
  departureCar = 'Select a car';
  model;

  categories;
  cars: any[];
  models: any[];

  isDisabled: boolean;

  constructor(private reservation: CarReserveService, private spinner: NgxSpinnerService,
              private toastr: ToastrService) {
    this.getCategories();
  }

  getCategoryCars(category: string) {
    console.log(category);
    if (category === 'Select Category') {
      this.cars = [];
      this.isDisabled = true;
    }
    this.spinner.show('sub');
    this.reservation.getCategoryCars(category).subscribe((response: ICars) => {
      this.spinner.hide('sub');
      console.log(response);
      this.cars = response.cars;
    });
  }

  getCategories() {
    this.spinner.show('sub');
    this.reservation.getCategories().subscribe((response: IReserve) => {
      this.spinner.hide('sub');
      this.categories = response.categories;

    });
  }

  getModel(selectedCar) {
    const result = this.cars.find(car => car.car === selectedCar);
    this.models = result.model;
    if (this.models.length === 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onSubmit(formValues) {
    this.spinner.show('main');
    this.reservation.makeReservation(formValues).subscribe((response) => {
      this.spinner.hide('main');
      this.toastr.success('Sucess!', 'Car successfully reserved!', {
        positionClass: 'toast-bottom-left'
      });
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
