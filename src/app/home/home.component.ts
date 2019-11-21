import { Component, OnInit } from '@angular/core';
import { fade, slide } from './../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade,
    slide
    ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}