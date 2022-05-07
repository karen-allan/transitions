import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-care-for-patients-overview',
  templateUrl: './care-for-patients-overview.component.html',
  styleUrls: ['./care-for-patients-overview.component.css']
})
export class CareForPatientsOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
