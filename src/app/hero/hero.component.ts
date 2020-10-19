import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;
  heroText: string;
  heroBtnText : string;
  heroBtnUrl:   string ;

  constructor() { 
    this.heroHeading =  "My first own Angular App" ;

  this.heroText =  "This is the first time i am using Angular and Typescript alone by myself to learn it because i really like it and i want to learn a lot about all of thi shit" ;

  this.heroUnText =  "See below which technologies i learned in the last 7 weeks" ;

  this.heroBtnUrl =  "https://codefactory.wien"  ;
  }

  ngOnInit(): void {
  }

}
