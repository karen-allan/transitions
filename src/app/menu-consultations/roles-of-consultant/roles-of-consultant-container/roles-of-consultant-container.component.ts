import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/ts-files/constants'
import {CONSULTANT_TESTIMONIALS} from "src/app/ts-files/constants";

@Component({
  selector: 'app-roles-of-consultant-container',
  templateUrl: './roles-of-consultant-container.component.html',
  styleUrls: ['./roles-of-consultant-container.component.css']
})
export class RolesOfConsultantContainerComponent implements OnInit {

  menuItemId:number   = 3;
  subMenuItemId:number = 30;

  detailHeaderName = 'header-roles-of-consultant'
  title= Constants.CONSULTANT_TESTIMONIALS
  quote='Always make decisions that prioritize your inner peace.'
  author='Izey Victoria Odiase'

  constructor() { }

  ngOnInit(): void {

  }



}
