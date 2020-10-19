import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;
  heroText: string;
  heroUnText : string;
  heroBtnUrl:   string ;

  constructor() { 
    this.heroHeading =  "My journey in learning FullStack" ;

  this.heroText =  "This page got created by using Angular, Typescript, Bootstrap, HTML and CSS, i really like this stuff!" ;

  this.heroUnText =  "See below which technologies i learned on my journey the last 7 weeks, and it will continue with 8 weeks of backend" ;

  this.heroBtnUrl =  "https://codefactory.wien"  ;
  }

  ngOnInit(): void {
  }

}
