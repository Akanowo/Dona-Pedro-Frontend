import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css']
})
export class WhatWeOfferComponent implements OnInit {

  iterator: Array<any> = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
