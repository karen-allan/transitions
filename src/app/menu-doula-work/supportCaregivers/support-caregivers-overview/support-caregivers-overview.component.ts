import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-support-caregivers-overview',
  templateUrl: './support-caregivers-overview.component.html',
  styleUrls: ['./support-caregivers-overview.component.css']
})
export class SupportCaregiversOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
