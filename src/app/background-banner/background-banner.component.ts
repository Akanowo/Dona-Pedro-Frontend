import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-banner',
  templateUrl: './background-banner.component.html',
  styleUrls: ['./background-banner.component.css']
})
export class BackgroundBannerComponent implements OnInit {

  reserveUrl = '#carReserve';
  @Input() heading;
  constructor() { }

  ngOnInit(): void {
  }

}
