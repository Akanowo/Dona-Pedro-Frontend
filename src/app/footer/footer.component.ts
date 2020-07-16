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

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  footerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl('')
  });
  constructor(private feedback: FeedBackService, private spinner: NgxSpinnerService, private toastr: ToastrService) {}


  onSubmit(formValues) {
    console.log(formValues);
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
  }

}
