import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-of-consultant-container',
  templateUrl: './roles-of-consultant-container.component.html',
  styleUrls: ['./roles-of-consultant-container.component.css']
})
export class RolesOfConsultantContainerComponent implements OnInit {

  menuItemId:number   = 3;
  subMenuItemId:number = 30;

  detailHeaderName = 'header-roles-of-consultant'
  title='End-of-Life Consulting'

  constructor() { }

  ngOnInit(): void {
  }

}
