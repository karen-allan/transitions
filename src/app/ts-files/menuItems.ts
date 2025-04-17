import { MenuItem} from './menuItem';
import * as Constants from 'src/app/ts-files/constants'
import {ABOUT, TAKE_ACTION} from "src/app/ts-files/constants";

export const MENU_ITEMS: MenuItem[] = [
  // {id: 0, title: 'HOME', url: 'menuHome'},

  {id: 1, title: Constants.PLAN_AHEAD.toUpperCase(), url:'menuPlanAhead'},
  {id: 2, title: Constants.TAKE_ACTION.toUpperCase(), url:'menuWritePlans'},
  {id: 3, title: Constants.BOOK_CONSULT.toUpperCase(), url:'menuConsultations'},
  {id: 4, title: Constants.ABOUT.toUpperCase(), url: 'menuAbout'},

];


