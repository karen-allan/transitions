import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-end-of-life-documents-overview',
  templateUrl: './end-of-life-documents-overview.component.html',
  styleUrls: ['./end-of-life-documents-overview.component.css']
})
export class EndOfLifeDocumentsOverviewComponent implements OnInit {

  @Input() title:string='';
  sectionSelected: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  /*********************************************************************************/
  getTriggeredPromptKey(id: number) {

    if (id == 1) {
      this.sectionSelected = "triggeredSection1"
    }
    if (id == 2) {
      this.sectionSelected = "triggeredSection2"
    }
    if (id == 3) {
      this.sectionSelected = "triggeredSection3"
    }
    if (id == 4) {
      this.sectionSelected = "triggeredSection4"
    }
   /* if (id == 5) {
      this.sectionSelected = "triggeredSection5"
    }
    if (id == 6) {
      this.sectionSelected = "triggeredSection6"
    }*/
  }

}
