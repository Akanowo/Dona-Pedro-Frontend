import {
  Component,
  OnInit
} from '@angular/core';
import {
  FeedBackService
} from 'src/shared/feedback-api.service';
import {
  NgxSpinnerService
} from 'ngx-spinner';
import {
  ToastrService
} from 'ngx-toastr';
import { IFeedback } from 'src/shared/feedback';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailVerificationService } from 'src/shared/email-verification-api.service';
import { IClearout } from 'src/shared/clearout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  footerForm: FormGroup;
  private email: FormControl;
  private name: FormControl;
  private phone: FormControl;
  private message: FormControl;
  constructor(private feedback: FeedBackService, private spinner: NgxSpinnerService, private toastr: ToastrService,
              private verifyMail: EmailVerificationService) {}

  validatePhone() {
    return this.phone.valid || this.phone.untouched;
  }

  validateName() {
    return this.name.valid || this.name.untouched;
  }

  validateEmail() {
    return this.email.valid || this.email.untouched;
  }

  validateMessage() {
    return this.message.valid || this.message.untouched;
  }

  emailVerify(email: string) {
    this.spinner.show('mail');
    this.verifyMail.verifyEmail(email).subscribe((response: IClearout) => {
      if (!response) {
        this.spinner.hide('mail');
        this.toastr.error('Couldn\'t make request', 'Error', {
          positionClass: 'toast-bottom-left'
        });
      }
      this.spinner.hide('mail');
      const { data } = response;
      if (data.status === 'valid') {
        this.toastr.info('Email Address Valid!', 'Success', {
          positionClass: 'toast-bottom-left'
        });
        this.footerForm.controls.name.enable();
        this.footerForm.controls.phone.enable();
        this.footerForm.controls.message.enable();
      }
      if (data.status === 'invalid') {
        this.footerForm.controls.name.disable();
        this.footerForm.controls.phone.disable();
        this.footerForm.controls.message.disable();
        this.toastr.error('Invalid email address', 'Error', {
          positionClass: 'toast-bottom-left'
        });
        return false;
      }
    }, (err) => {
      this.spinner.hide('main');
      this.toastr.error('No Internet Connection', 'Failed', {
        positionClass: 'toast-bottom-left'
      });
    });
  }

  onSubmit(formValues) {
    this.spinner.show('submit');
    try {
      this.feedback.sendFeedback(formValues).subscribe((response: IFeedback) => {
        if (response.error) {
          this.spinner.hide('submit');
          this.toastr.error(response.message, 'Error', {
            positionClass: 'toast-bottom-left'
          });
        } else {
          this.spinner.hide('submit');
          this.toastr.success('Sucess!', response.message, {
            positionClass: 'toast-bottom-left'
          });
        }
      }, (err) => {
        this.spinner.hide('sub');
        this.toastr.error(err.error.message, 'Error', {
          positionClass: 'toast-bottom-left'
        });
      });
    } catch (err) {
    }
  }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.name = new FormControl('', [Validators.required]);
    this.phone = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.message = new FormControl('', [Validators.required, Validators.minLength(5)]);

    this.footerForm = new FormGroup({
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
  }

}
