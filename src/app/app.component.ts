import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smartetest';
  path;
  constructor(private router: Router, location: Location) {
    router.events.subscribe(val => {
      this.path = location.path();
    });
  }
}
