import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'transitions';

 /* onActivate(event) {
    window.scroll({
      top: 0,
      left: 0
    });

  }
  */


}