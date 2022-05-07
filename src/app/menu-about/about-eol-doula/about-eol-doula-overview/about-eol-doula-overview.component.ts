import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-eol-doula-overview',
  templateUrl: './about-eol-doula-overview.component.html',
  styleUrls: ['./about-eol-doula-overview.component.css']
})
export class AboutEolDoulaOverviewComponent implements OnInit {

  @Input() title:string ='';

  constructor() { }

  ngOnInit(): void {



  }

}
