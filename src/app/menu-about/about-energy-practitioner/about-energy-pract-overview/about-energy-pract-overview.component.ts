import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-energy-pract-overview',
  templateUrl: './about-energy-pract-overview.component.html',
  styleUrls: ['./about-energy-pract-overview.component.css']
})
export class AboutEnergyPractOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {

  }

  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
}
