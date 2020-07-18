import {
  Injectable
} from '@angular/core';
import { IEvent } from './events';

const events: IEvent[] = [{
    name: 'The Grill, bbq, fiesta',
    desc: `This event is going to be a family event that will feature delicious food
  fromover 10 Grill, BBQ and Mixologist joints across Port Harcourt from
  top Restaurants, lounges and hotels in the city.`,
    imgUrl: 'assets/images/dummy/three-woman-with-face-paintings.jpg'
  },

  {
    name: 'Pool Parties',
    desc: `This will be held once a quarter for a year at Ibis hotel, Radisson blu Ikeja,
    La mango Ikeja Lagos. Water games and other fun will be provided by brand.
  There will be music from golden age of disco to contemporary hip-hop songs, as well as body painting,
  for those who will like to become a living piece of art.

  Our VIP guests will be treated to a Vegas style meal by putting out a large buffet in front of the pool with
   items many different cuisines such as sushi, chicken parmigiana and Ruben sandwiches.
  In our event a lot of card games with water games will be provided with a lot dressed like sea creatures so
  imagine hundreds of gorgeous looking mermaids frolicking in the pool with their multi-color tails, wow that's romantic.`,
    imgUrl: 'assets/images/promotions/pool-parties.jpg'
  },

  {
    name: 'Club special events',
    desc: `Every last Fridays from 11pm-3:00am at the truth club.
    Every last Friday's with a different party themes like masked party, all white party.
    Its going to be a bevy of fun with beautiful people. You differently need a linkup with
     bad bitches or a cool cat. A club party with the best DJs and the right people makes your night lit. `,
    imgUrl: 'assets/images/promotions/club-party.jpg'
  },

  {
    name: 'Cultural & Arts Festivals',
    desc: ` Once every year we drop it like its hot, show  casing our different rich cultural heritage with beautiful arts. `,
    imgUrl: 'assets/images/dummy/three-woman-with-face-paintings.jpg'
  },

  {
    name: 'Brand Activation',
    desc: `We help brands with their activations once a month especially
     for the liquor companies. If you love to party hard watch this space for more events and venues.`,
    imgUrl: 'assets/images/promotions/brand.jpf'
  },

  {
    name: 'Music Concerts',
    desc: `Once a year we give you a music concert like a festival just like the coachella,
    it's going to be epic, golden sounds from both old and new, with lovely show performances
    to make the occasion unforgettable. You might likely have to get you tent because it will be for the weekend.`,
    imgUrl: 'assets/images/dummy/three-woman-with-face-paintings.jpg'
  },

  {
    name: 'Street Gallery',
    desc: `Once a year display of different art works, that tells our stories to the world.
    local artists who make our city and region an interesting, lively place to live and work.
    Exhibit sponsors receive long-term recognition and exposure for the duration of the
    show and the exclusive opportunity to host a private reception in the intimate gallery
    space-how about an employee happy hour or a customer thank-you event?`,
    imgUrl: 'assets/images/promotions/street-gallery.jpg'
  },

  {
    name: 'Fashion Show',
    desc: `Once a year for young designers to bring to live their fashion sense to the runaway
    in order for it to be appreciated and accepted by the public.`,
    imgUrl: 'assets/images/dummy/three-woman-with-face-paintings.jpg'
  },

  {
    name: 'Beach parties',
    desc: `Two times a year.
    There will be music from golden age of disco to contemporary hip-hop songs, as well as body painting,
    for those who will like to become a living piece of art.
    At our event a lot of card games with water games will be provided and the selected pretty females
    better will be dressed like mermaids, so imagine hundreds of gorgeous looking mermaids
     frolicking in the pool beach with their multi-color tails, wow that's romantic.`,
    imgUrl: 'assets/images/promotions/beach-party.jpg'
  },

  {
    name: 'Harp Achievements Honors Awards',
    desc: `Strictly branded for Harp as a way to recognise achievers in the industry,
    they are worth celebrating and recognition, for their pains, hardworking, sacrifice and innovations
    to the industry. An award like no other.`,
    imgUrl: 'assets/images/dummy/three-woman-with-face-paintings.jpg'
  },
];

@Injectable()

export class EventsService {
  constructor() {}
  getEvents() {
    return events;
  }
}
