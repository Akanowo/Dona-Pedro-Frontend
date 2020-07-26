import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventsService } from 'src/shared/events.service';
import { IEvent } from 'src/shared/events';
import AOS from 'aos';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit, AfterViewInit {
  heading = 'Promotions';
  eventName;
  eventImg;
  eventDesc;
  events: IEvent[];
  @ViewChild('cardBody') cardBody;
  @ViewChild('showMoreBtn') btn;
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

  ngAfterViewInit(): void {
    this.cardBody.nativeElement.onmouseover = () => {
      this.btn.nativeElement.style.backgroundColor = '#FFBE4D';
      this.btn.nativeElement.style.color = '#000';
    };
    this.cardBody.nativeElement.onmouseleave = () => {
      this.btn.nativeElement.style.backgroundColor = '#010311';
      this.btn.nativeElement.style.color = '#fff';
    };
  }

}
