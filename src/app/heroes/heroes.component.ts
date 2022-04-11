import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from "./models/hero.model";

@Component({
  selector: 'app-heroes [title]',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input() title!: string;
  @Output() titleChange = new EventEmitter<string>();

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  logChange($event: string) {
    console.log($event)
    this.titleChange.emit($event);
  }
}
