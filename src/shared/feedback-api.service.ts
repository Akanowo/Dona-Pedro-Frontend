import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()

export class FeedBackService {
  endpoint = environment.API_ENDPOINT;
  proxUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}
  sendFeedback(formValues: object) {
    const endpoint = this.proxUrl + this.endpoint + '/api/feedback';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(endpoint, formValues, options);
  }
}
