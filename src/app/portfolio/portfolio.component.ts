import { Component, OnInit } from '@angular/core';
import { fade, slide } from './../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    fade,
    slide
    ]
})
export class PortfolioComponent implements OnInit {
  
  subNav = [
    {name: 'HTML & CSS'},
    {name: 'JavaScript'},
    {name: 'Python with Flask'},
    {name: 'Python with Django'},
    {name: 'Angular'},
    ]
  
  portfolioNav = [
    {name: 'Overview'},
    {name: 'Features'},
    {name: 'Future Implimentation'},
    {name: 'Site'},
    ]  
  
  displayed="HTML & CSS"
  
  isActive="yes"
  
  changeView(info){
    this.displayed= info
  }
  
  portfolioDisplayed = "Overview"
  
  changePortfolioView(info){
    this.portfolioDisplayed= info
  }
  
  constructor() { }

  ngOnInit() {
  }

}
