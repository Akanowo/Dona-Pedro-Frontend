import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()

export class EmailVerificationService {

  constructor(private http: HttpClient) { }
  verifyEmail(email: string) {
    const endpoint = 'https://api.clearout.io/v2/email_verify/instant';
    const proxUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = proxUrl + endpoint;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer:${environment.CLEAROUR_TOKEN}`
      }),
    };
    const body = {
      email
    };

    return this.http.post(url, body, options);
  }
}
