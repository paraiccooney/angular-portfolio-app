import { Component, OnInit } from '@angular/core';
import { fade } from './../animations';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fade,
    ]
})
export class ContactComponent implements OnInit {
  
    /* Email.js */

    public sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('outlook', 'template_Y8qO2avO', e.target as HTMLFormElement, 'user_n15rYoKDom1DHseR7h9m0')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
  }
  
  
    subNav = [
    {name: 'Contact'},
    {name: 'Social & Contact Info'}
    ]
    
    displayed="Contact"
    formView="Form"

    changeView(info){
    this.displayed= info
    }
    
    formSubmitted = false
    
    displayThankYou(){
      this.formSubmitted = true
    }
    
  constructor() { }

  ngOnInit() {
  }

}