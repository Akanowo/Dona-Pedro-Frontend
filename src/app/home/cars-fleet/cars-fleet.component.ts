import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-cars-fleet',
  templateUrl: './cars-fleet.component.html',
  styleUrls: ['./cars-fleet.component.css']
})
export class CarsFleetComponent implements OnInit {

  cars: Array < object > = [{
      name: 'Feugo Margery',
      imgUrl: 'assets/images/bmw-22462.png',
      condition: 'In perfect working condition',
      transition: 'Automatic',
      bodyType: 'Sports',
      capacity: '2 seats'
    },
    {
      name: 'Feugo Margery',
      imgUrl: 'assets/images/bmw-22478.png',
      condition: 'In perfect working condition',
      transition: 'Automatic',
      bodyType: 'Sports',
      capacity: '2 seats'
    },
    {
      name: 'Feugo Margery',
      imgUrl: 'assets/images/bmw-22480.png',
      condition: 'In perfect working condition',
      transition: 'Automatic',
      bodyType: 'Sports',
      capacity: '2 seats'
    },
    {
      name: 'Feugo Margery',
      imgUrl: 'assets/images/PNGPIX-COM-Aston-Martin-Vantage-GT4-White-Car-PNG-Image.png',
      condition: 'In perfect working condition',
      transition: 'Automatic',
      bodyType: 'Sports',
      capacity: '2 seats'
    },
    {
      name: 'Feugo Margery',
      imgUrl: 'assets/images/honda-car-37313.png',
      condition: 'In perfect working condition',
      transition: 'Automatic',
      bodyType: 'Sports',
      capacity: '2 seats'
    },
    {
      name: 'Feugo Margery',
      imgUrl: 'assets/images/bmw-22462.png',
      condition: 'In perfect working condition',
      transition: 'Automatic',
      bodyType: 'Sports',
      capacity: '2 seats'
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
