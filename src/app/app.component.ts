import { Component, ElementRef, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public clicked = false;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {}

  public surprise(): void {

    const canvas = this.renderer2.createElement('canvas');

    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true
    });

    myConfetti();

    this.clicked = true;
  }
}
