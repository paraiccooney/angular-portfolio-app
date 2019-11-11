import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  subNav = [
    {name: 'HTML & CSS'},
    {name: 'JavaScript'},
    {name: 'Python with Flask'},
    {name: 'Python with Django'},
    {name: 'Angular'},
    ]
  
  displayed="HTML & CSS"
  
  isActive="yes"
  
  changeView(info){
    this.displayed= info
    console.log(this.displayed)
  }

  constructor() { }

  ngOnInit() {
  }

}
