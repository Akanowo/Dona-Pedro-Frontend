import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Array < object > = [{
      author: 'Nick Canon',
      testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum obcaecati at deserunt, ipsa expedita assumenda. Delectus quisquam,
    voluptates saepe alias deserunt iure perferendis odit illo amet ea accusamus asperiores adipisci?`,
      business: 'Developer'
    },
    {
      author: 'John Doe',
      testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum obcaecati at deserunt, ipsa expedita assumenda. Delectus quisquam,
    voluptates saepe alias deserunt iure perferendis odit illo amet ea accusamus asperiores adipisci?`,
      business: 'Marketer'
    },
    {
      author: 'James Kennedy',
      testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum obcaecati at deserunt, ipsa expedita assumenda. Delectus quisquam,
    voluptates saepe alias deserunt iure perferendis odit illo amet ea accusamus asperiores adipisci?`,
      business: 'Sales Owner'
    },
    {
      author: 'Mark Luther',
      testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum obcaecati at deserunt, ipsa expedita assumenda. Delectus quisquam,
    voluptates saepe alias deserunt iure perferendis odit illo amet ea accusamus asperiores adipisci?`,
      business: 'Strategist'
    },
    {
      author: 'Anthony Martial',
      testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum obcaecati at deserunt, ipsa expedita assumenda. Delectus quisquam,
    voluptates saepe alias deserunt iure perferendis odit illo amet ea accusamus asperiores adipisci?`,
      business: 'Footballer'
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
