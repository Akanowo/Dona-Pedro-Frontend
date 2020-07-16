import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FeedBackService } from 'src/shared/feedback-api.service';
import { IFeedback } from 'src/shared/feedback';
import { EmailVerificationService } from 'src/shared/email-verification-api.service';
import { IClearout } from 'src/shared/clearout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  heading = 'Contact Us';
  contactForm: FormGroup;
  constructor(private feedback: FeedBackService, private spinner: NgxSpinnerService,
              private toastr: ToastrService, private verifyMail: EmailVerificationService) { }

  emailVerify(email: string) {
    this.verifyMail.verifyEmail(email).subscribe((response: IClearout) => {
      if (!response) {
        this.spinner.hide('main');
        this.toastr.error('Couldn\'t make request', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      }
      this.spinner.hide('main');
      console.log('Response: ', response);
      const { data } = response;
      if (data.status === 'valid') {
        this.toastr.info('Email Address Valid!', 'Success', {
          positionClass: 'toast-bottom-left'
        });
      }
      if (data.status === 'invalid') {
        this.contactForm.controls.name.disable();
        this.contactForm.controls.phone.disable();
        this.contactForm.controls.message.disable();
        this.toastr.error('Couldn\'t validate email', 'Error', {
          positionClass: 'toast-bottom-left'
        });
        return false;
      }
    }, (err) => {
      console.log('An error occured ', err);
      this.spinner.hide('main');
      this.toastr.error('No Internet Connection', 'Failed', {
        positionClass: 'toast-bottom-left'
      });
    });
  }

  onSubmit(formValues) {
    this.spinner.show('sub');
    try {
      this.feedback.sendFeedback(formValues).subscribe((response: IFeedback) => {
        console.log('Response: ', response);
        if (response.error) {
          this.spinner.hide('sub');
          this.toastr.error(response.message, 'Error', {
            positionClass: 'toast-bottom-left'
          });
        } else {
          console.log(response);
          this.spinner.hide('sub');
          this.toastr.success('Sucess!', 'Car successfully reserved!', {
            positionClass: 'toast-bottom-left'
          });
        }
      }, (err) => {
        console.log(err);
        this.spinner.hide('sub');
        this.toastr.error(err.error.message, 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
      console.log('An error occured', err);
    }
  }

  ngOnInit(): void {
    const email = new FormControl('', [Validators.required, Validators.email]);
    const name = new FormControl('', [Validators.required]);
    const phone = new FormControl('', [Validators.required]);
    const message = new FormControl('', [Validators.required]);

    this.contactForm = new FormGroup({
      email,
      name,
      phone,
      message
    });
  }

}
