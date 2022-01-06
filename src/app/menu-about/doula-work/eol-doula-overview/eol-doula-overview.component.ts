import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eol-doula-overview',
  templateUrl: './eol-doula-overview.component.html',
  styleUrls: ['./eol-doula-overview.component.css']
})
export class EolDoulaOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
