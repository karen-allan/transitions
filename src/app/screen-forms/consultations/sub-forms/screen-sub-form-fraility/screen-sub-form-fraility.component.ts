import {Component, Input, Output} from '@angular/core';
import {Client} from "../../../../ts-files/client";

@Component({
  selector: 'app-screen-sub-form-fraility',
  templateUrl: './screen-sub-form-fraility.component.html',
  styleUrl: './screen-sub-form-fraility.component.css'
})
export class ScreenSubFormFrailityComponent {

  @Input() @Output() client:Client;

  ngOnInit(): void {
    this.client.eolFrailty = 'frailtyChart-1';

  }
}
