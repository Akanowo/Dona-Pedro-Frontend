import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/shared/events.service';
import { IEvent } from 'src/shared/events';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  heading = 'Promotions';
  events: IEvent[];
  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
