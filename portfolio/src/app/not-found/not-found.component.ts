import { Component, OnInit } from '@angular/core';
import { fade, slide } from './../animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    fade,
    slide
    ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
