import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()

export class CarReserveService {
  endpoint = environment.API_ENDPOINT;
  proxUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: HttpClient) {
    this.getCategories();
  }


  getCategoryCars(category: string) {
    const url = this.proxUrl + this.endpoint + '/api/get-cars';
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
    const url = this.proxUrl + this.endpoint + '/api/reserve-car';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(url, options);
  }

  makeReservation(formValues) {
    const url = this.proxUrl + this.endpoint + '/api/get-cars';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, formValues, options);
  }
}
