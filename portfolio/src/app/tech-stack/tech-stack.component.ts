import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent implements OnInit {
  
  subNav = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Bootstrap/Bootwatch'},
    {name: 'jQuery'},
    {name: 'JavaScript'},
    {name: 'API Interaction'},
    {name: 'JSON Representation'},
    {name: 'Python'},
    {name: 'Flask'},
    {name: 'Django'},
    {name: 'SQL'},
    {name: 'Stripe'},
    {name: 'MongoDB'},
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
