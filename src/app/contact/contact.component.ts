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
    this.spinner.show('main');
    this.verifyMail.verifyEmail(email).subscribe((response: IClearout) => {
      if (!response) {
        this.spinner.hide('main');
        this.toastr.error('Couldn\'t make request', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      }
      this.spinner.hide('main');
      const { data } = response;
      if (data.status === 'valid') {
        this.toastr.info('Email Address Valid!', 'Success', {
          positionClass: 'toast-bottom-left'
        });
        this.contactForm.controls.name.enable();
        this.contactForm.controls.phone.enable();
        this.contactForm.controls.message.enable();
      }
      if (data.status === 'invalid') {
        this.contactForm.controls.name.disable();
        this.contactForm.controls.phone.disable();
        this.contactForm.controls.message.disable();
        this.toastr.error('Invalid email address', 'Error', {
          positionClass: 'toast-bottom-left'
        });
        return false;
      }
    }, (err) => {
      this.spinner.hide('main');
      this.contactForm.controls.name.disable();
      this.contactForm.controls.phone.disable();
      this.contactForm.controls.message.disable();
      this.toastr.error('No Internet Connection', 'Failed', {
        positionClass: 'toast-bottom-left'
      });
    });
  }

  onSubmit(formValues) {
    formValues.type = 'contact';
    this.spinner.show('sub');
    try {
      this.feedback.sendFeedback(formValues).subscribe((response: IFeedback) => {
        if (response.error) {
          this.spinner.hide('sub');
          this.toastr.error(response.message, 'Error', {
            positionClass: 'toast-bottom-left'
          });
        } else {
          this.spinner.hide('sub');
          this.toastr.success(response.message, 'Success', {
            positionClass: 'toast-bottom-left'
          });
        }
      }, (err) => {
        this.spinner.hide('sub');
        this.toastr.error(err.message, 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
      this.toastr.error('An error occured', 'Error', {
        positionClass: 'toast-bottom-left'
      });
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
