import {SubMenuItem} from './subMenuItem';
import * as Constants from 'src/app/ts-files/constants'
import {CREATE_YOUR_CHECK_LIST, UNDERSTAND_ADVANCE_PLAN} from "src/app/ts-files/constants";


export const SUB_MENU_ITEMS: SubMenuItem[] = [

    {id: 10, parent_id: 1, title: Constants.THINK_ABOUT_YOUR_NEEDS.toUpperCase(), url: 'thinkAboutNeeds'},
    {id: 11, parent_id: 1, title: Constants.CONSIDER_YOUR_ADVOCATES.toUpperCase(), url: 'considerAdvocates'},
    {id: 12, parent_id: 1, title: Constants.UNDERSTAND_ADVANCE_PLAN.toUpperCase(), url: 'considerAdvancePlan'},
    {id: 13, parent_id: 1, title: Constants.KNOW_YOUR_RIGHTS.toUpperCase(), url: 'considerCPR'},

    {id: 20, parent_id: 2, title: Constants.PUT_CHOICES_IN_WRITING.toUpperCase(), url: 'makeWishList'},
    {id: 21, parent_id: 2, title: Constants.CHOOSE_YOUR_REPS.toUpperCase(), url: 'chooseReps'},
    {id: 22, parent_id: 2, title: Constants.WRITE_ADVANCE_CARE_PLAN.toUpperCase(), url: 'writeCarePlan'},
    {id: 23, parent_id: 2, title: Constants.CREATE_YOUR_CHECK_LIST.toUpperCase(), url: 'checkOffList'},

    {id: 30, parent_id: 3, title: Constants.CONSULTANT_TESTIMONIALS.toUpperCase(), url: 'rolesOfConsultant'},
    {id: 31, parent_id: 3, title: Constants.BOOK_CONSULTATION.toUpperCase(), url: 'bookConsultation'},

    {id: 40, parent_id: 4, title: Constants.ABOUT_EOL_CAREGIVERS.toUpperCase(), url: 'aboutPractitioner'},
    {id: 41, parent_id: 4, title: Constants.ABOUT_HOW_WE_SUPPORT_YOU.toUpperCase(), url: 'aboutEndOfLifeAdvocacy'},


];



