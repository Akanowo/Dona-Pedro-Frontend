import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-banner',
  templateUrl: './background-banner.component.html',
  styleUrls: ['./background-banner.component.css']
})
export class BackgroundBannerComponent implements OnInit {

  reserveUrl = '#carReserve';
  constructor() { }

  ngOnInit(): void {
  }

}
