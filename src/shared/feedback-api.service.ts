import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class FeedBackService {

  constructor(private http: HttpClient) {}
  sendFeedback(formValues: object) {
    const endpoint = '/api/feedback';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(endpoint, formValues, options);
  }
}
