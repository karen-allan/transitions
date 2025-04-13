import {PathObject} from "./pathObject";
import * as Constants from 'src/app/ts-files/constants'


export const PATH_OBJECTS: PathObject[] = [

    {id: 1,
        parent_name: Constants.PLAN_AHEAD,
        child1_name:Constants.THINK_ABOUT_YOUR_NEEDS,
        child1_url:'/thinkAboutNeeds',
        child2_name:Constants.CONSIDER_YOUR_ADVOCATES,
        child2_url:'/considerAdvocates',
        child3_name:Constants.UNDERSTAND_ADVANCE_PLAN,
        child3_url:'/considerAdvancePlan',
        child4_name:Constants.KNOW_YOUR_RIGHTS,
        child4_url:'/considerYourRights'},

    {id: 2,
        parent_name: Constants.TAKE_ACTION,
        child1_name:Constants.WRITE_WISH_LIST,
        child1_url:'/makeWishList',
        child2_name:Constants.CHOOSE_YOUR_REPS,
        child2_url:'/chooseReps',
        child3_name:Constants.WRITE_ADVANCE_CARE_PLAN,
        child3_url:'/writeCarePlan',
        child4_name:Constants.CREATE_YOUR_CHECK_LIST,
        child4_url:'/checkOffList'},

];
