import { Component } from '@angular/core';
import * as Constants from "../../../ts-files/constants";

@Component({
  selector: 'app-testimonials-fees-container',
  templateUrl: './testimonials-fees-container.component.html',
  styleUrl: './testimonials-fees-container.component.css'
})
export class TestimonialsFeesContainerComponent {

  menuItemId:number   = 3;
  subMenuItemId:number = 30;

  title= Constants.CONSULTANT_TESTIMONIALS
  quote='Always make decisions that prioritize your inner peace.'
  author='Izey Victoria Odiase'
}
