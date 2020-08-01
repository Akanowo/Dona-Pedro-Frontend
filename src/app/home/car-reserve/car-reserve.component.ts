import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-reserve',
  templateUrl: './car-reserve.component.html',
  styleUrls: ['./car-reserve.component.css']
})
export class CarReserveComponent implements OnInit {
  isTransferActive = true;
  isDailyActive: boolean;
  constructor() {}

  toggleTransferActive() {
    this.isTransferActive = false;
    this.isDailyActive = true;
  }
  toggleDailyActive() {
    this.isTransferActive = true;
    this.isDailyActive = false;
  }

  ngOnInit(): void {
  }

}
