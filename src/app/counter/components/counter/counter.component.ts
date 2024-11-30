import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
    <h3>{{ counter }}</h3>

    <button (click)="adicion(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="adicion(-1)">-1</button> `,
})
export class CounterComponent {
  public counter: number = 10;

  adicion(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
