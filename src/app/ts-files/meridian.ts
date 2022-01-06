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

    // button_bkgrd_color?:string;
    meridian_icon?:string;
    meridian_attribute_pic?:string;
    meridian_attribute_pic2?:string;
    meridian_element_pic?:string;
    meridian_animal_pic?:string;

    meridian_path_pic?:string,
    meridian_path_copy?:string;

    background_color?:string;
    font_color?:string;

    meridian_imbalances?:MeridianPhysicalImbalance;
    meridian_balance?:MeridianBalance;

    affirmation_text:string;
    affirmations_list?: Affirmation;

    tracingText?: TracingInstruction;

    western?: MedicalViews;
    chinese?:  MedicalViews;

    source_point?:string;
    source_pic?:string;

    nl_points?:string;
    nl_pic?:string;

    nv_points?:string;
    nv_pic?:string;

    acu_points_sender_sedate?:string;
    acu_points_sender_sedate_acu?:string;
    acu_points_sender_sedate_desc?:string;
    acu_points_sender_sedate_pic?:string;

    acu_points_sender_sedate2?:string;
    acu_points_sender_sedate_acu2?:string;
    acu_points_sender_sedate_desc2?:string;
    acu_points_sender_sedate_pic2?:string;

    acu_points_sender_strengthen?: string;
    acu_points_sender_strengthen_acu?:string;
    acu_points_sender_strengthen_desc?:string;
    acu_points_sender_strengthen_pic?:string;

    acu_points_sender_strengthen2?: string;
    acu_points_sender_strengthen_acu2?:string;
    acu_points_sender_strengthen_desc2?:string;
    acu_points_sender_strengthen_pic2?:string;

    acu_points_sender_control?:string;
    acu_points_sender_control_acu?:string;
    acu_points_sender_control_desc?:string;
    acu_points_sender_control_pic?:string;

    acu_points_sender_control2?:string;
    acu_points_sender_control_acu2?:string;
    acu_points_sender_control_desc2?:string;
    acu_points_sender_control_pic2?:string;

    acu_points_receiver_sedate?:string;
    acu_points_receiver_sedate_desc?:string;
    acu_points_receiver_sedate_pic?:string;

    acu_points_receiver_sedate2?:string;
    acu_points_receiver_sedate_desc2?:string;
    acu_points_receiver_sedate_pic2?:string;

    acu_points_receiver_strengthen?: string;
    acu_points_receiver_strengthen_desc?:string;
    acu_points_receiver_strengthen_pic?:string;

    acu_points_receiver_strengthen2?: string;
    acu_points_receiver_strengthen_desc2?:string;
    acu_points_receiver_strengthen_pic2?:string;

    acu_points_receiver_control?:string;
    acu_points_receiver_control_desc?:string;
    acu_points_receiver_control_pic?:string;

    acu_points_receiver_control2?:string;
    acu_points_receiver_control_desc2?:string;
    acu_points_receiver_control_pic2?:string;

    cen_gov_icon?:string;




}
