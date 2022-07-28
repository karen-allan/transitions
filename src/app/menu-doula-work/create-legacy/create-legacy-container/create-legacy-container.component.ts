import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-legacy-container',
  templateUrl: './create-legacy-container.component.html',
  styleUrls: ['./create-legacy-container.component.css']
})
export class CreateLegacyContainerComponent implements OnInit {

  menuItemId:number  = 3;
  subMenuItemId:number = 32;

  detailHeaderName = 'header-create-legacy'
  title='Leaving a Legacy'
  detailListName="list-doula-work"

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('headers');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}
