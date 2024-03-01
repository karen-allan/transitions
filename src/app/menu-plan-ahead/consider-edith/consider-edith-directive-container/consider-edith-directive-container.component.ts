import { Component } from '@angular/core';

@Component({
  selector: 'app-consider-edith-directive-container',
  templateUrl: './consider-edith-directive-container.component.html',
  styleUrl: './consider-edith-directive-container.component.css'
})
export class ConsiderEdithDirectiveContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 24;

  detailHeaderName="header-documents-to-sign"
  title="Consider E.D.I.T.H"

}
