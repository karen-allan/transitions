import { Component } from '@angular/core';

@Component({
  selector: 'app-consider-cpr-directive-container',
  templateUrl: './consider-cpr-directive-container.component.html',
  styleUrl: './consider-cpr-directive-container.component.css'
})
export class ConsiderCprDirectiveContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 23;

  detailHeaderName="header-documents-to-sign"
  title="Understanding CPR"

}
