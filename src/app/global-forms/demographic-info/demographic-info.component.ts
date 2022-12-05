import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../ts-files/client";

@Component({
  selector: 'app-demographic-info',
  templateUrl: './demographic-info.component.html',
  styleUrls: ['./demographic-info.component.css']
})

export class DemographicInfoComponent implements OnInit {

    @Input() @Output() client: Client;

    provinces = ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'Prince Edward Island', 'New Brunswick', 'Nova Scotia', 'Newfoundland',
        'Northwest Territories', 'Nunavut', 'Yukon'];

  constructor() { }

  ngOnInit(): void {
      this.client.provState= this.provinces[0];
  }




}
