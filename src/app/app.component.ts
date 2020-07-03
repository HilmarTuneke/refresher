import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;

  reset() {
    this.value = 0;
  }

  incrementValue(diff: number) {
    this.value += diff;
  }
}
