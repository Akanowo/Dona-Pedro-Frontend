import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class CarReserveService {
  reserveAPi = '/api/reserve-car';

  constructor(private http: HttpClient) {
    this.getCategories();
  }


  getCategoryCars(category: string) {
    const url = '/api/get-cars';
    const body = {
      category
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, body, options);
  }

  getCategories() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.reserveAPi, options);
  }

  makeReservation(formValues) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.reserveAPi, formValues, options);
  }
}
