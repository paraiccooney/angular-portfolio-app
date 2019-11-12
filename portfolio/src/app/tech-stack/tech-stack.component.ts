import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style} from '@angular/animations';
import { fade, slide } from './../animations';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
  animations: [
    fade,
    slide
  ]
})
export class TechStackComponent implements OnInit {
  
  subNav = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Bootstrap/Bootwatch'},
    {name: 'jQuery'},
    {name: 'JS'},
    {name: 'API Interaction'},
    {name: 'JSON Representation'},
    {name: 'Python'},
    {name: 'Flask'},
    {name: 'Django'},
    {name: 'SQL'},
    {name: 'Stripe'},
    {name: 'MongoDB'},
    {name: 'Angular'},
    ]
  
  displayed="HTML"
  
  isActive="yes"
  
  changeView(info){
    this.displayed= info
    console.log(this.displayed)
  }

  constructor() { }

  ngOnInit() {
  }

}
