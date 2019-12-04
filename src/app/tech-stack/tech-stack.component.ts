import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style} from '@angular/animations';
import { fade} from './../animations';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
  animations: [
    fade,
  ]
})
export class TechStackComponent implements OnInit {
  
  subNav = [
    {name: 'HTML'},
    {name: 'CSS3'},
    {name: 'Bootstrap'},
    {name: 'jQuery'},
    {name: 'JavaScript'},
    {name: 'APIs'},
    {name: 'Python'},
    {name: 'Flask'},
    {name: 'Django'},
    {name: 'SQL'},
    {name: 'Stripe'},
    {name: 'MongoDB'},
    {name: 'AWS'},
    {name: 'Angular'},
    {name: 'Google Analytics'}
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