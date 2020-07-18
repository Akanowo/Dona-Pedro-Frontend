import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../cars.service';
import { ICar } from '../cars';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: ICar;
  constructor(private router: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.car = this.carService.getCar(+this.router.snapshot.params.id);
  }

}
