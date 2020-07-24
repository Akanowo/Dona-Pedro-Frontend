import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-d-clean',
  templateUrl: './d-clean.component.html',
  styleUrls: ['./d-clean.component.css']
})
export class DCleanComponent implements OnInit {
  heading = 'D-Clean';
  services = [
    {
      id: 'a1',
      name: 'Recurring Maintenance Check ups',
      descId: 'a2',
      descIdHref: '#a2',
      desc: `After your first deep clean, we can work with you to schedule a recurring time to come back and maintain
      it clean. Keeping your home maintenance can help in preventing odors and dirt from accumulating.
      Whether you want us back once a week, or only four times a year, we are flexible with your schedule.`
    },
    {
      id: 'b1',
      name: 'General cleaning',
      descId: 'b2',
      descIdHref: '#b2',
      desc: `A clean home equals a happy home. Not only does having a clean home make it look better,
      but it can also bring you calm and positive vibes. Free up your schedule for the more important things
      like spending time with your friends or family and leave the cleaning to us. Leave your information with us
       here and we will get back to you ASAP so we can get started cleaning up your home. `
    },
    {
      id: 'c1',
      name: 'Move-in/ move out',
      descId: 'c2',
      descIdHref: '#c2',
      desc: `We know how stressful the moving in/out process can be. You already have to worry about planning,
      packing, transportation, etc. Adding cleaning to that to-do list isn't fun. However, at Crush Cleaning Company
      all you have to do is call us, schedule an appointment and we take care of the rest. Our team of cleaning experts
      will get your home ready for you whether you are planning on moving in or out.`
    },
    {
      id: 'd1',
      name: 'Pet hair removal cleaning',
      descId: 'd2',
      descIdHref: '#d2',
      desc: `Our four-legged pets are our best friends. They bring us joy and a bunch of memories.
      However, they can also bring us a lot of stress with the mess their fur makes. Not only does it go everywhere
      but they can also leave an unpleasant odor in your home. With our Cleaning Company, you can request for home
      cleaning services with our pet hair removal specialization.`
    },
    {
      id: 'e1',
      name: 'Deep cleaning and disinfection',
      descId: 'e2',
      descIdHref: '#e2',
      desc: `We are your local premium provider of home cleaning services and we specialize in deep cleaning.
      You're a busy person. Your to-do list is never-ending and cleaning isn't necessarily on the top of that list.
      That is what we are here for. With our cleaning specialist, we can go to your home and do a deep clean to make
      sure we catch everything. Our deep clean services allow us to do all the more intense cleaning that we cannot get
      to during the regular maintenance cleans.`
    }
  ];
  constructor() {
    AOS.init();
   }

  ngOnInit(): void {
  }

}
