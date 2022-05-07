import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-legacy-overview',
  templateUrl: './create-legacy-overview.component.html',
  styleUrls: ['./create-legacy-overview.component.css']
})
export class CreateLegacyOverviewComponent implements OnInit {

  @Input() title ='';

  constructor() { }

  ngOnInit(): void {
  }

}
