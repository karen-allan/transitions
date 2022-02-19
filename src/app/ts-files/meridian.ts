import {TracingInstruction} from "./tracing-instruction";
import {ElementPsychExcess} from "./element-psych-excess";
import {ElementPsychDeficient} from "./element-psych-deficient";
import {ElementPsychBalance} from "./element-psych-balance";

import {ElementPhysicalDeficient} from "./element-physical-deficient";
import {ElementPhysicalExcess} from "./element-physical-excess";
import {MeridianPhysicalImbalance} from "./meridian-physical-imbalance";

import {MeridianBalance} from "./meridian-balance";
import {MedicalViews} from "./medical-views"
import {Affirmation} from "./affirmation";

export interface Meridian {
    id: number;
    element_id?:number;
    element_name?:string;
    name: string;
    short: string,
    time_range?: string;
    start_hour?: number;
    end_hour?: number;
    yin_yang: string;

    font_color?:string;
    background_color?:string;

    meridian_imbalances?:MeridianPhysicalImbalance;
    meridian_balance?:MeridianBalance;

    tracingText?: TracingInstruction;
    affirmation_text:string;
    affirmations_list?: Affirmation;

    western?: MedicalViews;
    chinese?:  MedicalViews;

    meridian_icon?:string;
    meridian_element_pic?:string;
    meridian_attribute_pic?:string;
    meridian_animal_pic?:string;
    meridian_path_pic?:string,
    source_pic?:string;
    nl_pic?:string;
    nv_pic?:string;
    acu_points_strengthen_pic?:string;
    //acu_points_strengthen_pic2?:string;
    acu_points_sedate_pic?:string;
  //  acu_points_sedate_pic2?:string;

    meridian_path_copy?:string;
    source_point?:string;
    nl_points?:string;
    nv_points?:string;

    acu_points_strengthen?: string;
    acu_points_strengthen2?: string;
    acu_points_strengthen_desc?:string;
   // acu_points_strengthen_desc2?:string;

    acu_points_sedate?:string;
    acu_points_sedate2?:string;
    acu_points_sedate_desc?:string;
   // acu_points_sedate_desc2?:string;


}
