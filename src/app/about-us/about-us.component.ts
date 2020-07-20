import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  heading = 'About Us';
  missionDisplay = true;
  visionDisplay = true;
  services = [
    {
      id: 'a1',
      name: 'School Bus and Staff Bus Scheme',
      descId: 'a2',
      descIdHref: '#a2',
      desc: 'We can help you move your staff and students from home to work/school.'
    },
    {
      id: 'b1',
      name: 'Light trucks ',
      descId: 'b2',
      descIdHref: '#b2',
      desc: 'Our light trucks are suited for your logistics needs.'
    },
    {
      id: 'c1',
      name: 'Armoured Vehicles ',
      descId: 'c2',
      descIdHref: '#c2',
      desc: `If you’re moving your High value assets or individuals and security is of
      utmost importance, we have vehicles suited for this purpose.`
    },
    {
      id: 'd1',
      name: 'Premium Vehicles ',
      descId: 'd2',
      descIdHref: '#d2',
      desc: 'Luxury and high value vehicles.'
    },
    {
      id: 'e1',
      name: 'Airport Pick up and Drop Off ',
      descId: 'e2',
      descIdHref: '#e2',
      desc: `We will arrange your pick up and drop off fro the airport, in time.`
    },
    {
      id: 'f1',
      name: 'Car Rental ( Short and Long term) ',
      descId: 'f2',
      descIdHref: '#f2',
      desc: `We have a fleet of cars available for rent either for a few hours, a few days, or months.`
    },
    {
      id: 'g1',
      name: 'Escort Services ',
      descId: 'g2',
      descIdHref: '#g2',
      desc: `We also provide Escort Services for our clients nationwide.`
    },
    {
      id: 'h1',
      name: 'Drivers Outsourcing ',
      descId: 'h2',
      descIdHref: '#h2',
      desc: `We also outsource our chauffeur services to our clients nationwide.`
    },
    {
      id: 'i1',
      name: ' Replacement Vehicle Scheme ',
      descId: 'i2',
      descIdHref: '#i2',
      desc: ` We support your operations to avoid down time in the event of vehicle breakdown.`
    },
    {
      id: 'j1',
      name: ' Pool Car Management',
      descId: 'j2',
      descIdHref: '#j2',
      desc: `Concentrate on your core business and let us manage all your pool vehicles effectively and efficiently.`
    },
    {
      id: 'k1',
      name: 'Fleet management ',
      descId: 'k2',
      descIdHref: '#k2',
      desc: `We can help minimize the risks associated with vehicle investment,
      improving efficiency, productivity and reducing overall transportation and staff costs.`
    },
    {
      id: 'l1',
      name: 'Operate and Maintain',
      descId: 'l2',
      descIdHref: '#l2',
      desc: `We can help operate and maintain your vehicle fleet; helping you focus on your core operations.`
    },
    {
      id: 'm1',
      name: 'Haulage/Logistics',
      descId: 'm2',
      descIdHref: '#m2',
      desc: `We help convey your goods/products conveniently to your desired destination`
    },
    {
      id: 'n1',
      name: 'General cleaning',
      descId: 'n2',
      descIdHref: '#n2',
      desc: `A clean home equals a happy home. Not only does having a clean home make it look better, but it can also bring
      you calm and positive vibes. Free up your schedule for the more important things like spending time with your
      friends or family and leave the cleaning to us. Leave your information with us here and we will get back to you
      ASAP so we can get started cleaning up your home. `
    },
    {
      id: 'o1',
      name: 'Move-in/ move out',
      descId: 'o2',
      descIdHref: '#o2',
      desc: `We know how stressful the moving in/out process can be.
      You already have to worry about planning, packing, transportation, etc. Adding cleaning
      to that to-do list isn't fun. However, at Crush Cleaning Company all you have to do is call us,
      schedule an appointment and we take care of the rest. Our team of cleaning experts will get your home
      ready for you whether you are planning on moving in or out.`
    },
    {
      id: 'p1',
      name: 'Pet hair removal cleaning',
      descId: 'p2',
      descIdHref: '#p2',
      desc: `Our four-legged pets are our best friends. They bring us joy and a bunch of memories. However,
      they can also bring us a lot of stress with the mess their fur makes. Not only does it go everywhere but they
      can also leave an unpleasant odor in your home.
      With our Cleaning Company, you can request for home cleaning services with our pet hair removal specialization.`
    },
    {
      id: 'q1',
      name: 'Deep cleaning and disinfection.',
      descId: 'q2',
      descIdHref: '#q2',
      desc: `We are your local premium provider of home cleaning services and we specialize in deep cleaning.
      You're a busy person. Your to-do list is never-ending and cleaning isn't necessarily on the top of that list.
      That is what we are here for. With our cleaning specialist, we can go to your home and do a deep clean to make sure
      we catch everything. Our deep clean services allow us to do all the more intense cleaning that we cannot get to during
      the regular maintenance cleans.`
    },
    {
      id: 'r1',
      name: 'Lifestyle and Event',
      descId: 'r2',
      descIdHref: '#r2',
      desc: `Offering a range of Communication Services focused on the delivery of quality exceptional
      solutions for the realization of each client's unique marketing needs,
      ultimately adding value to your business. You can get a quotation from us today on how to go about your party.`
    },
  ];
  constructor() {
    AOS.init();
  }

  setMissionDisplay() {
    return this.missionDisplay = false;
  }

  setVisionDisplay() {
    return this.visionDisplay = false;
  }

  ngOnInit(): void {
  }

}
