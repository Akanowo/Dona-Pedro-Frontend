import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarReserveService } from '../car-reserve/car-reserve-api.service';
import { IReserve } from '../car-reserve/car-reserve-api.model';
import { ICarReserve } from '../car-reserve//cars.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IReserveResponse } from '../car-reserve//reserve.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-daily-rental',
  templateUrl: './daily-rental.component.html',
  styleUrls: ['./daily-rental.component.css']
})
export class DailyRentalComponent implements OnInit, AfterViewInit {
  body: HTMLDocument;
  setMargin: boolean;
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
  private email: FormControl;
  private name: FormControl;
  private phone: FormControl;

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

  validatePhone() {
    return this.phone.valid || this.phone.untouched;
  }

  validateName() {
    return this.name.valid || this.name.untouched;
  }

  validateEmail() {
    return this.email.valid || this.email.untouched;
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
    if (category === 'Select Category') {
      this.cars = [];
      this.isDisabled = true;
    }
    this.spinner.show('sub');
    try {
      this.reservation.getCategoryCars(category).subscribe((response: ICarReserve) => {
        this.spinner.hide('sub');
        this.cars = response.cars;
      }, (err) => {
        this.spinner.hide('sub');
        this.toastr.error('Error connecting', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
    }
  }

  getCategories() {
    this.spinner.show('sub');
    try {
      this.reservation.getCategories().subscribe((response: IReserve) => {
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
        this.spinner.hide('main');
        this.toastr.error('Error connecting', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
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
    this.model = new FormControl('');
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.name = new FormControl('', [Validators.required]);
    this.phone = new FormControl('', [Validators.required, Validators.minLength(5)]);

    this.dailyRentalForm = new FormGroup({
      departure: this.departure,
      destination: this.destination,
      dropoffDate: this.dropOffDate,
      dropoffTime: this.dropOffTime,
      returnDate: this.returnDate,
      returnTime: this.returnTime,
      carCategory: this.carCategory,
      departureCar: this.departureCar,
      model: this.model,
      email: this.email,
      name: this.name,
      phone: this.phone
    });
  }

  ngAfterViewInit(): void {
    if (this.body.body.clientWidth <= 320) {
      this.setMargin = true;
    } else {
      this.setMargin = false;
    }
  }

}
