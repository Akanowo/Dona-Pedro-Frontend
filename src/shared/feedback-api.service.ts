import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CarService } from 'src/app/home/cars-fleet/cars.service';
import { CarReserveService } from 'src/app/home/car-reserve/car-reserve-api.service';


@Injectable()

export class FeedBackService {

  constructor(private http: HttpClient, private carService: CarReserveService) {}

  sendFeedback(formValues: object) {
    const endpoint = this.carService.getUrl() + '/feedback';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(endpoint, formValues, options);
  }
}
