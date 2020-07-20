import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css']
})
export class WhatWeOfferComponent implements OnInit {

  iterator: Array<any> = [
    {img: 'assets/images/ads/ads2.jpg'},
    {img: 'assets/images/ads/ads1.jpeg'},
    {img: 'assets/images/ads/ads5.jpeg'}
  ];

  services = [
  {
    id: 'a1',
    name: 'Outstanding Services',
    descId: 'a2',
    descIdHref: '#a2',
    desc: `Our highly professional customer service team ensue that clients enjoy a Wow service experience.
    Our reservation response time is next to none.
    Our range of services are geared towards achieving maximum client satisfaction.`
  },
  {
    id: 'b1',
    name: 'Masters Of The Road!',
    descId: 'b2',
    descIdHref: '#b2',
    desc: 'Our professional chauffeurs are continuously trained to make your trip a memorable one.'
  },
  {
    id: 'c1',
    name: 'Movement & Logistics',
    descId: 'c2',
    descIdHref: '#c2',
    desc: `We have the fleet and man power to get you and your products/ services to all states of the federation`
  },
  {
    id: 'd1',
    name: 'Premium Vehicles',
    descId: 'd2',
    descIdHref: '#d2',
    desc: `We offer neat and maintained automobile brands such as Toyota, Honda, BMW, Ford, Dodge, JAGUAR, Mercedes
    Benz LANDROVER, RANGE ROVER, Lexus vehicles, amongst other brands.`
  },
  {
    id: 'e1',
    name: 'Trackers On Every Vehicle',
    descId: 'e2',
    descIdHref: '#e2',
    desc: `Our GPS solution also includes a complete report suite for you, so you can see your data and reports in one
    easy-to-read format.`
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
