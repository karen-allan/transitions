import {ElementPsychExcess} from "./element-psych-excess";
import {ElementPsychDeficient} from "./element-psych-deficient";
import {ElementPsychBalance} from "./element-psych-balance";
import {ElementPhysicalDeficient} from "./element-physical-deficient";
import {ElementPhysicalExcess} from "./element-physical-excess";

export interface Element {
    id: number;
    name: string;
    start_hour: number;
    end_hour: number;
    start_hour_2?: number;
    end_hour_2?: number;
    meridians: string;
    element_1?:string;
    element_2?:string;
    element_3?:string;
    element_4?:string;

    time_range_yin_1?: string;
    time_range_yang_1?:string;

    time_range_yin_2?: string;
    time_range_yang_2?: string;

    sedates:string;
    sedates_metaphor:string;

    sedates_meridian1?:string;
    sedates_meridian1_points?:string;

    sedates_meridian2?:string;
    sedates_meridian2_points?:string;

    sedates_meridian3?:string;
    sedates_meridian3_points?:string;

    sedates_meridian4?:string;
    sedates_meridian4_points?:string;

    element_wheel_diagram_sed?:string;

    strengthens_meridian1?:string;
    strengthens_meridian1_points?:string;

    strengthens_meridian2?:string;
    strengthens_meridian2_points?:string;

    strengthens_meridian3?:string;
    strengthens_meridian3_points?:string;

    strengthens_meridian4?:string;
    strengthens_meridian4_points?:string;

    element_wheel_diagram_str?:string;

    element_wheel_diagram_ctr?:string;

    strengthens:string;
    strengthens_metaphor:string;

    controls:string;
    controls_metaphor:string;

    icon: string;
    bkgrd_image:string;

    verb: string;
    overall:string;
    season:string;

    summary_yin?:string;
    summary_yang?:string;

    power_animals?: string;
    attributes: string;
    challenge?: string;
    governs: string;
    archetypes:string;



    direction?:string;
    weather?:string;
    color?:string;
    taste?:string;
    sensory_organ?:string;
    aspect:string;
    time_day?:string;
    focus?:string;
    body_type:string;
    stress_emotion:string;
    positive_traits1?: string;
    negative_traits1?: string;
    positive_traits2?: string;
    negative_traits2?: string;
    positive_traits3?: string;
    negative_traits3?: string;
    positive_traits4?: string;
    negative_traits4?: string;
    vital_function?:string;
    arts?:string;
    occupations?:string;
    relationship:string;

    background_color_active:string;
    background_color_selected:string;

    font_color_active:string;
    font_color_selected:string;

    heading_font_color:string;
    copy_font_color:string;

    excess_psych: ElementPsychExcess;
    deficient_psych: ElementPsychDeficient;
    balanced_psych:ElementPsychBalance;
    excess_physio:ElementPhysicalExcess;
    deficient_physio:ElementPhysicalDeficient;

    treating_emotion: string;

    nl_overview:string;
    nl_points:string;
    nl_pic:string;

    nv_points:string;
    nv_pic:string;

    yang_pic: string;
    yang_pic_2?: string;
    yin_pic:string;
    yin_pic_2?:string;


}
