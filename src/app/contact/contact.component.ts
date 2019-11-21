import { Component, OnInit } from '@angular/core';
import { fade, slide } from './../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fade,
    slide
    ]
})
export class ContactComponent implements OnInit {
  
    subNav = [
    {name: 'Contact'},
    {name: 'Social'}
    ]
    
    displayed="Contact"

    changeView(info){
    this.displayed= info
    console.log(this.displayed)
    }
    
  constructor() { }

  ngOnInit() {
  }

}