import { Component, OnInit } from '@angular/core';
import { fade, slide } from './../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    fade,
    slide
    ]
})
export class AboutComponent {

  subNav = [
    {name: 'Overview'},
    ]
  
  displayed="Overview"
  
  isActive="yes"
  
  changeView(info){
    this.displayed= info
    console.log(this.displayed)
  }

  constructor() { }

  ngOnInit() {
  }

}
