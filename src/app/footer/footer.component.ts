import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name;
  email;
  message;
  constructor() { }


  onSubmit(formValues) {
    console.log(formValues);
  }

  ngOnInit(): void {
  }

}
