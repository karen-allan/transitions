import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-caregivers-container',
  templateUrl: './support-caregivers-container.component.html',
  styleUrls: ['./support-caregivers-container.component.css']
})
export class SupportCaregiversContainerComponent implements OnInit {

  menuItemId:number = 4;
  subMenuItemId:number = 43;

  detailHeaderName = 'header-caregiver-care'
  title='Care for the Caregiver'
  detailListName="list-doula-work"

  constructor() { }

  ngOnInit(): void {
  }

}
