import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()

export class CarReserveService {
  getUrl() {
    if (environment.production === true) {
      const endpoint = environment.API_ENDPOINT;
      const proxUrl = 'https://cors-anywhere.herokuapp.com/';
      return proxUrl + endpoint;
    } else {
      return '/api';
    }
  }

  constructor(private http: HttpClient) {
    this.getCategories();
  }


  getCategoryCars(category: string) {
    const url = this.getUrl() + '/get-cars';
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
    const url = this.getUrl() + '/reserve-car';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(url, options);
  }

  makeReservation(formValues) {
    const url = this.getUrl() + '/reserve-car';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, formValues, options);
  }
}
