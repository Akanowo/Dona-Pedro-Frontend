import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/shared/events.service';
import { IEvent } from 'src/shared/events';
import AOS from 'aos';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  heading = 'Promotions';
  eventName;
  eventImg;
  eventDesc;
  events: IEvent[];
  constructor(private eventService: EventsService) {
    AOS.init();
  }

  setDetails(name, desc, imgUrl) {
    this.eventName = name;
    this.eventDesc = desc;
    this.eventImg = imgUrl;
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
