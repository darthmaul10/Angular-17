import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;

  get capilizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): string {
    return (this.name = 'Spiderman');
  }

  changeAge(): number {
    return (this.age = 50);
  }

  reset():void{
    this.name='ironman';
    this.age=40;
  }
}
