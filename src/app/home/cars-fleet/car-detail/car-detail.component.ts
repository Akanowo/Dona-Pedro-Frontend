import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CarService } from '../cars.service';
import { ICar } from '../cars';
import AOS from 'aos';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit, AfterViewInit {

  car: ICar;
  constructor(private router: ActivatedRoute, private carService: CarService, private route: Router) {
    AOS.init();
  }

  getCar() {
    this.car = this.carService.cars.find((car) => car.id === this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getCar();
    // this.car = this.carService.getCar();
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
