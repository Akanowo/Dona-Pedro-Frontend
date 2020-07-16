import { Component, OnInit } from '@angular/core';
import { CarReserveService } from '../car-reserve/car-reserve-api.service';
import { IReserve } from '../car-reserve/car-reserve-api.model';
import { ICars } from '../car-reserve//cars.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IReserveResponse } from '../car-reserve//reserve.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-daily-rental',
  templateUrl: './daily-rental.component.html',
  styleUrls: ['./daily-rental.component.css']
})
export class DailyRentalComponent implements OnInit {
  dailyRentalForm: FormGroup;
  private departure: FormControl;
  private destination: FormControl;
  private dropOffDate: FormControl;
  private dropOffTime: FormControl;
  private carCategory: FormControl;
  private departureCar: FormControl;
  private model: FormControl;
  private returnDate: FormControl;
  private returnTime: FormControl;

  categories: Array<string>;
  departures: Array<string>;
  destinations: Array<string>;
  cars: any[];
  models: Array<string>;

  isDisabled: boolean;

  constructor(private reservation: CarReserveService, private spinner: NgxSpinnerService,
              private toastr: ToastrService) {
    this.getCategories();
  }

  validateDeparture() {
    if (this.departure.value === 'Select Location') {
      return false;
    }
    return this.departure.valid || this.departure.untouched;
  }

  validateDestination() {
    if (this.destination.value === 'Select Location') {
      return false;
    }
    return this.destination.valid || this.destination.untouched;
  }

  validateDropOffDate() {
    return this.dropOffDate.valid || this.dropOffDate.untouched;
  }

  validateReturnDate() {
    return this.returnDate.valid || this.returnDate.untouched;
  }

  validateDropOffTime() {
    return this.dropOffTime.valid || this.dropOffTime.untouched;
  }

  validateReturnTime() {
    return this.returnTime.valid || this.returnTime.untouched;
  }


  validateCarCategory() {
    if (this.carCategory.value === 'Select Category') {
      return false;
    }
    return this.carCategory.valid || this.carCategory.untouched;
  }

  validateDepartureCar() {
    if (this.departureCar.value === 'Select Car') {
      return false;
    }
    return this.departureCar.valid || this.departureCar.untouched;
  }

  validateModel() {
    if (this.model.value === 'Select Model') {
      return false;
    }
    return this.model.valid || this.model.untouched;
  }

  getCategoryCars(category: string) {
    console.log(category);
    if (category === 'Select Category') {
      this.cars = [];
      this.isDisabled = true;
    }
    this.spinner.show('sub');
    try {
      this.reservation.getCategoryCars(category).subscribe((response: ICars) => {
        this.spinner.hide('sub');
        console.log(response);
        this.cars = response.cars;
      }, (err) => {
        this.spinner.hide('sub');
        this.toastr.error('Error connecting', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
      console.log('An error occured', err);
    }
  }

  getCategories() {
    this.spinner.show('sub');
    try {
      this.reservation.getCategories().subscribe((response: IReserve) => {
        console.log(response);
        this.spinner.hide('sub');
        this.categories = response.categories;
        this.departures = response.locations;
        this.destinations = response.states;
      }, (err) => {
        this.spinner.hide('sub');
        this.toastr.error('Error connecting', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
      console.log('An error occured', err);
    }
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
    try {
      this.reservation.makeReservation(formValues).subscribe((response: IReserveResponse) => {
        console.log(response);
        console.log(response.error);
        if (response.error) {
          this.spinner.hide('main');
          this.toastr.error('Check your internet and try again', 'Error', {
            positionClass: 'toast-bottom-left'
          });
        } else {
          this.spinner.hide('main');
          this.toastr.success('Sucess!', 'Car successfully reserved!', {
            positionClass: 'toast-bottom-left'
          });
        }
      }, (err) => {
        console.log(err);
        this.spinner.hide('main');
        this.toastr.error('Error connecting', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
      console.log('An error occured', err);
    }
  }

  ngOnInit(): void {
    this.departure = new FormControl('', [Validators.required]);
    this.destination = new FormControl('', [Validators.required]);
    this.dropOffDate = new FormControl('', [Validators.required]);
    this.dropOffTime = new FormControl('', [Validators.required]);
    this.returnDate = new FormControl('', [Validators.required]);
    this.returnTime = new FormControl('', [Validators.required]);
    this.carCategory = new FormControl('', [Validators.required]);
    this.departureCar = new FormControl('', [Validators.required]);
    this.model = new FormControl('', [Validators.required]);

    this.dailyRentalForm = new FormGroup({
      departure: this.departure,
      destination: this.destination,
      dropoffDate: this.dropOffDate,
      dropoffTime: this.dropOffTime,
      returnDate: this.returnDate,
      returnTime: this.returnTime,
      carCategory: this.carCategory,
      departureCar: this.departureCar,
      model: this.model
    });
  }

}
