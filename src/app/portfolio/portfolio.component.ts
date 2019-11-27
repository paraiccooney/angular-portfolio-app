import { Component, OnInit } from '@angular/core';
import { fade } from './../animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    fade,
    ]
})
export class PortfolioComponent implements OnInit {
  
  /* Side-nav control */
  isExpanded = true;
  
  toggleSideNav(){
    this.isExpanded = !this.isExpanded
  }
  
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
    {name: 'Take a look'},
    ] 
    
  angularPortfolioNav = [
    {name: 'Overview'},
    {name: 'Features'},
    {name: 'Future Implimentation'},
    ]
  
  displayed="HTML & CSS"
  portfolioDisplayed = "Overview"
  isActive="yes"
  
  changeView(info){
    this.displayed= info
  }
  
  
  changePortfolioView(info){
    this.portfolioDisplayed= info
  }
  
  revertToOverview(){
    this.portfolioDisplayed = "Overview"
  }
  
  constructor() { }

  ngOnInit() {
  }

}