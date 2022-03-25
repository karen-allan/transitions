import { Meridian} from './meridian';

import {SPInstruction, STInstruction, HTInstruction, SIInstruction, BLInstruction, KIInstruction, PCInstruction,
        TWInstruction, GBInstruction, LRInstruction, LUInstruction, LIInstruction}
from "./tracing-instructions";

import {StomachMeridianBalance, SpleenMeridianBalance, HeartMeridianBalance,
    SmallIntestineMeridianBalance, BladderMeridianBalance, KidneyMeridianBalance, PericardiumMeridianBalance, TripleWarmerMeridianBalance,
    GallbladderMeridianBalance, LiverMeridianBalance, LungMeridianBalance, LargeIntestineMeridianBalance
} from "./meridian-balances";

import {
    StomachMeridianImbalance, BladderMeridianImbalance, GallbladderMeridianImbalance, HeartMeridianImbalance, KidneyMeridianImbalance,
    LargeIntestineMeridianImbalance, LiverMeridianImbalance, LungMeridianImbalance, PericardiumMeridianImbalance, SmallIntestineMeridianImbalance,
    SpleenMeridianImbalance, TripleWarmerMeridianImbalance
} from "./meridian-physical-imbalances";

import {StomachChineseMedicine, SpleenChineseMedicine, HeartChineseMedicine, SmallIntestineChineseMedicine, BladderChineseMedicine,
    KidneyChineseMedicine, PericardiumChineseMedicine, TripleWarmerChineseMedicine, GallbladderChineseMedicine, LiverChineseMedicine,
    LungChineseMedicine, LargeIntestineChineseMedicine}
    from "./chinese-medicine"

import {StomachWesternMedicine, SpleenWesternMedicine, HeartWesternMedicine, SmallIntestineWesternMedicine, BladderWesternMedicine,
    KidneyWesternMedicine, PericardiumWesternMedicine, TripleWarmerWesternMedicine, GallbladderWesternMedicine, LiverWesternMedicine,
    LungWesternMedicine, LargeIntestineWesternMedicine}
    from "./westernMedicine";

import {StomachAffirmation, SpleenAffirmation, HeartAffirmation, SmallIntestineAffirmation, BladderAffirmation, KidneyAffirmation,
PericardiumAffirmation, TripleWarmerAffirmation, GallBladderAffirmation, LiverAffirmation, LungAffirmation, LargeIntestineAffirmation} from "./affirmations";

export const MERIDIANS: Meridian[] = [
    {id: 1,
        element_id:1,
        element_name:'Water',
        name: 'Bladder',
        short:'BL',
        time_range: '3:00 pm - 5:00 pm',
        start_hour:15,
        end_hour:17,
        yin_yang:'yang.',

        font_color:'color:#4298ED',
        background_color:'background-color:#4298ED',

        meridian_imbalances: BladderMeridianImbalance,
        meridian_balance:BladderMeridianBalance,

        tracingText: BLInstruction,
        affirmation_text:'I feel vibrant, hopeful and fully alive',
        affirmations_list:BladderAffirmation,

        western:BladderWesternMedicine,
        chinese:BladderChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/bladder/iconBL.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/bladder/elementBL.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/bladder/attributeBL.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/bladder/animalBL.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/bladder/pathBL.jpg',
        source_pic:'assets/images/energyMedicine/meridians/bladder/sourceBL.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/bladder/nlBL.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/bladder/nvBL.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/bladder/acuPts-LI-STR-BL.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/bladder/acuPts-GB-SED-BL.jpg',

        meridian_path_copy: 'Bladder begins at the area between your eyes (Bladder 1). ' +
            'It moves up and over your head to the back of your neck. ' +
            'It follows down about an inch on either side of your spine.' +
            'It flows down to mid buttock at the sacrum and then back up over your hips.' +
            'It stops there and then starts again about 3 inches on either side of your spine.' +
            'It stops there and then starts again at your neck moving down about 3 inches on either side of your spine.' +
            'It follows down the inside of your back thighs and calves, to your outer feet, ending at the baby toes.',

        source_point:'BL-64, located in front of the tuberosity of the 5th metatarsal bone.',

        nl_points:'Find your frontal Bladder Neuro-Lymphatics about an inch on either side of your center line at your navel. ' +
            'Find your back Bladder NLs along your spine at waist level.',

        nv_points:'Bladder Neuro-Vasculars are right between your eyebrows (this is also the start of Bladder meridian - BL-1).' +
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Large Intestine strengthens Bladder',
        acu_points_strengthen_desc:'LI-1 strengthens BL-67.',

        acu_points_sedate:'Gallbladder sedates Bladder',
        acu_points_sedate_desc:'Gallbladder sedate Bladder. Hold GB-41 and BL-65.',
    },

    {id: 2,
        element_id:1,
        element_name:'Water',
        name: 'Kidney',
        short:'KI',
        time_range: '5:00 pm - 7:00 pm',
        start_hour:17,
        end_hour:19,
        yin_yang:'yin',

        font_color:'color:#2D6BB4',
        background_color:'background-color:#2D6BB4',

        meridian_imbalances: KidneyMeridianImbalance,
        meridian_balance:KidneyMeridianBalance,
        tracingText: KIInstruction,
        affirmation_text:'I move forward in my life, with confidence',
        affirmations_list:KidneyAffirmation,

        western:KidneyWesternMedicine,
        chinese:KidneyChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/kidney/iconKI.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/kidney/elementKI.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/kidney/attributeKI.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/kidney/animalKI.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/kidney/pathKI.jpg',
        source_pic:'assets/images/energyMedicine/meridians/kidney/sourceKI.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/kidney/nlKI.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/kidney/nvKI.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/kidney/acuPts-LU-STR-KI.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/kidney/acuPts-LR-SED-KI.jpg',

        meridian_path_copy: 'Kidney begins under your feet, in the center between the arch and pads. ' +
            '(Found by flexing your feet and locating the dent). ' +
            'It moves up from Kidney 1 following the inside of your feet.' +
            'It makes a little circle around the inside of your ankle.' +
            'It follows up the inside of your shin, knees, thighs to your pubic area.' +
            'It traces straight up the center of the trunk to the nipple level.' +
            'It moves out about 2 inches laterally and stops at Kidney 27 just under the clavicles.',

        source_point:'KI-3, located between the tip of the Medial Malleolus and the Achilles Tendon.',

        nl_points:'Find your frontal Kidney Neuro-Lymphatics about an inch down from your throat notch and two inches ' +
            'out from your center. This is Kidney 27 and is very helpful to tap when you are tired. Also find ' +
            'them on the inside of your upper shoulders and upper arms. Find your back Kidney NLs next to the big bump ' +
            'on your spine (Cervical 7). To get to your lower Kidney NLs reach your hands behind your waist so that ' +
            'your thumbs are reaching for your spine, this allows you to move up to those Kidney points.',

        nv_points:'Kidney Neuro-Vasculars at the side of your head (you can feel the temporal artery pulsing), ' +
            'at the base of the head, alongside the middle of the ears and at the upper jawline.' +
        ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Lung strengthens Kidney',
        acu_points_strengthen_desc:'Hold LU-8 and KI-7',

        acu_points_sedate:'Liver sedates Kidney',
        acu_points_sedate_desc:'To sedate Kidney hold LR-1 and KI-1.',
    },

    {id: 3,
        element_id:3,
        element_name:'Fire',
        name: 'Pericardium',
        short:'PC',
        time_range: '7:00 pm - 9:00 pm',
        start_hour:19,
        end_hour:21,
        yin_yang:'yin',

        font_color:'color:#c24541',
        background_color:'background-color:#c24541',

        meridian_imbalances: PericardiumMeridianImbalance,
        meridian_balance: PericardiumMeridianBalance,

        tracingText: PCInstruction,
        affirmation_text:'I take excellent care of my Heart',
        affirmations_list:PericardiumAffirmation,

        western:PericardiumWesternMedicine,
        chinese:PericardiumChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/pericardium/iconPC.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/pericardium/elementPC.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/pericardium/attributePC.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/pericardium/animalPC.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/pericardium/pathPC.jpg',
        source_pic:'assets/images/energyMedicine/meridians/pericardium/sourcePC.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/pericardium/nlPC.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/pericardium/nvPC.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/pericardium/acuPts-LR-STR-PC.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/pericardium/acuPts-SP-SED-PC.jpg',

        meridian_path_copy: 'Pericardium begins at the outer edge of your nipples Pericardium-1. ' +
            'It moves laterally to the edge of your chest and then up to your shoulders. ' +
            'Once at the top front of your shoulders, it follows down the center of your arm.' +
            'It travels down to the middle of your inner wrist crease, down to your middle fingertip.',

        source_point:'PC-7, located in the very center of the inner wrist crease, along the middle finger.',

        nl_points:'Find your frontal Pericardium Neuro-Lymphatics along the top of your pubic bone (Bladder is also here). ' +
            'Find the other frontal PC NLs on the front of your inner thighs. Find your back NLs just under your shoulder ' +
            'blades (reach back at that level and your fingers will land there. Find the other back NLS at your Coccyx.',

        nv_points:'Pericardium Neuro-Vasculars at the side of your head (you can feel the temporal artery pulsing), ' +
            'at the back side of the head, alongside the edges of your eyebrows.'+
        ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Liver strengthens Pericardium',
        acu_points_strengthen_desc:'Hold LR-1 at the inside nail of the big toe and PC-9 and the tip of the middle finger',

        acu_points_sedate:'Spleen sedates Pericardium',
        acu_points_sedate_desc:'To sedate Pericardium hold PC-7 and SP-3.',
    },

    {id: 4,
        element_id:3,
        element_name:'Fire',
        name: 'Triple Warmer',
        short:'TW',
        time_range: '9:00 pm - 11:00 pm',
        start_hour:21,
        end_hour:23,
        yin_yang:'yang',

        font_color:'color:#e8abaa',
        background_color:'background-color:#e8abaa',

        meridian_imbalances: TripleWarmerMeridianImbalance,
        meridian_balance: TripleWarmerMeridianBalance,

        tracingText: TWInstruction,
        affirmation_text:'I honour my Inner Warrior who keeps me safe',
        affirmations_list:TripleWarmerAffirmation,

        western:TripleWarmerWesternMedicine,
        chinese:TripleWarmerChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/tripleWarmer/iconTW.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/tripleWarmer/elementTW.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/tripleWarmer/attributeTW.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/tripleWarmer/animalTW.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/tripleWarmer/pathTW.jpg',
        source_pic:'assets/images/energyMedicine/meridians/tripleWarmer/sourceTW.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/tripleWarmer/nlTW.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/tripleWarmer/nvTW.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/tripleWarmer/acuPts-GB-STR-TW.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/tripleWarmer/acuPts-ST-SED-TW.jpg',

        meridian_path_copy: 'Triple Warmer starts on your outer hand at your ring finger - Triple Warmer 1. ' +
            'It moves up your hand and along the outer elbow, the funny bone area. ' +
            'It then follows along the tops of your shoulders to the back of your neck.' +
            'It traces up the side of your neck to just under your ear.' +
            'It moves behind your ears to the tops, and then flows across your face to your outer eyebrows.',

        source_point:'TW-4, located on the transverse crease in the dip on the dorsum of the wrist.',

        nl_points:'Find your frontal Triple Warmer Neuro-Lymphatics about an inch below your navel and an inch lateral to it. ' +
            'This is also known as the Dantian Point. Find the back Triple Warmer NLs at the top of the spine alongside the ' +
            'shoulders and the bottom of the spine under your ribcage.',

        nv_points:'Triple Warmer Neuro-Vasculars at the back of your head about 2/3rds of the way up and ' +
            'just in front of your ear (tragus) - where TW meridian ends - TW-23.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Gallbladder strengthens Triple Warmer',
        acu_points_strengthen_desc:'To strengthen Triple Warmer hold GB-41 and TW-3',

        acu_points_sedate:'Stomach sedates Triple Warmer',
        acu_points_sedate_desc:'To sedate Small Intestine hold ST-36 and TW-10.',
    },

    {id: 5,
        element_id:2,
        element_name:'Wood',
        name: 'Gallbladder',
        short:'GB',
        time_range: '11:00 pm - 1:00 am',
        start_hour:23,
        end_hour:1,
        yin_yang:'yang',

        font_color:'color:#8ec270',
        background_color:'background-color:#8ec270',

        meridian_imbalances: GallbladderMeridianImbalance,
        meridian_balance: GallbladderMeridianBalance,

        tracingText: GBInstruction,
        affirmation_text:'I assert myself peacefully and release judgement easily',
        affirmations_list:GallBladderAffirmation,

        western:GallbladderWesternMedicine,
        chinese:GallbladderChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/gallbladder/iconGB.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/gallbladder/elementGB.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/gallbladder/attributeGB.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/gallbladder/animalGB.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/gallbladder/pathGB.jpg',
        source_pic:'assets/images/energyMedicine/meridians/gallbladder/sourceGB.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/gallbladder/nlGB.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/gallbladder/nvGB.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/gallbladder/acuPts-BL-STR-GB.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/gallbladder/acuPts-SI-SED-GB.jpg',

        meridian_path_copy: 'Gallbladder (GB-1) starts about an inch under your eyebrows outer edge. ' +
            'It follows down to the bottom of your ears. ' +
            'It then juts upwards halfway up the side of your head.' +
            'It makes an upside down V and then moves down to your ear tops.' +
            'It then follows around the backs of your ears and stops.' +
            'It scoops back up and over the side of your head to your forehead.' +
            'It traces over your head and down the sides of your neck.' +
            'It follows over your shoulder to your upper chest area.' +
            'It travels forward at the mid section of your chest.' +
            'It then traces backwards at just below your side ribs towards your waist.' +
            'Then it moves forwards again from your ribs to your pelvis.' +
            'From here it travels down the sides of your legs, ankles and feet to stop at your 4th toes (GB-44).',

        source_point:'GB- located at the ankle joint, in the dip infront of but behind the Lateral Malleolus.',

        nl_points:'Find your frontal Gallbladder Neuro-Lymphatics along your sternum (Lung NLs are there also). ' +
            'Find your back Gallbladder NLs along your spine at the level of your shoulder blade centers and' +
            'a few inches below your ribcage. Find your GB NL on your legs about 4 inches from your hip bone tops. ',

        nv_points:'Gallbladder Neuro-Vasculars are on the very top of the head.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Bladder Strengthens Gallbladder',
        acu_points_strengthen_desc:'To strengthen Gallbladder hold BL-66 and GB-43.',

        acu_points_sedate:'Small Intestine sedates Gallbladder',
        acu_points_sedate_desc:'To sedate Gallbladder hold SI-5 and GB-38.',
    },

    {id: 6,
        element_id:2,
        element_name:'Wood',
        name: 'Liver',
        short:'LV',
        time_range: '1:00 am - 3:00 am',
        start_hour:1,
        end_hour:3,
        yin_yang:'yin',

        font_color:'color:#2A6E31',
        background_color:'background-color:#2A6E31',

        meridian_imbalances: LiverMeridianImbalance,
        meridian_balance: LiverMeridianBalance,

        tracingText: LRInstruction,
        affirmation_text:'I am kind to myself',
        affirmations_list:LiverAffirmation,

        western:LiverWesternMedicine,
        chinese:LiverChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/liver/iconLR.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/liver/elementLR.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/liver/attributeLR.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/liver/animalLR.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/liver/pathLR.jpg',
        source_pic:'assets/images/energyMedicine/meridians/liver/sourceLR.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/liver/nlLR.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/liver/nvLR.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/liver/acuPts-KI-STR-LR.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/liver/acuPts-HT-SED-LR.jpg',

        meridian_path_copy: 'Liver starts on the inside edge of your big toes (Liver-1). ' +
            'It follows up the inner side of your feet to your inner ankles. ' +
            'It traces upwards to your knees till it reaches the outer pelvic edge. ' +
            'It angles sharply to the outer edges of your waist. ' +
            'It then angles sharply to just under your ribcage in line with your nipples. ',

        source_point:'LR-3, located on the dorsum of the foot, along the inside of the big toe and after the tuberosity.',

        nl_points:'Find your frontal Liver Neuro-Lymphatics along the upside down U that forms right under your right breast. ' +
            'Find the back Liver NLs at about the center between the top of the spine and the bottom, on either side of the spinal cord.',

        nv_points:'Liver Neuro-Vasculars are on the very top of the head as well as being found along the hairline, about an inch ' +
            'on either side of the very center.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Kidney strengthens Liver',
        acu_points_strengthen_desc:'To strengthen Liver hold KI-10 and LR-8.',

        acu_points_sedate:'Heart sedates Liver',
        acu_points_sedate_desc:'To sedate Liver hold HT-8 and LR-2.',
    },

    {id: 7,
        element_id:5,
        element_name:'Metal',
        name: 'Lungs',
        short:'LU',
        time_range: '3:00 am-5:00 am',
        start_hour:3,
        end_hour:5,
        yin_yang:'yin',

        font_color:'color:#7f8386',
        background_color:'background-color:#7f8386',

        meridian_imbalances: LungMeridianImbalance,
        meridian_balance: LungMeridianBalance,

        tracingText: LUInstruction,
        affirmation_text:'I let go of stale Chi and breathe in fresh Chi and inspiration',
        affirmations_list:LungAffirmation,

        western:LungWesternMedicine,
        chinese:LungChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/lungs/iconLU.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/lungs/elementLU.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/lungs/attributeLU.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/lungs/animalLU.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/lungs/pathLU.jpg',
        source_pic:'assets/images/energyMedicine/meridians/lungs/sourceLU.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/lungs/nlLU.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/lungs/nvLU.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/lungs/acuPts-SP-STR-LU.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/lungs/acuPts-KI-SED-LU.jpg',

        meridian_path_copy: 'Lung begins on either side of your chest where suspenders would sit. ' +
            'It moves up an inch to your upper inner shoulder. ' +
            'It moves down your inner arm, in line with your thumb.' +
            'It follows down the edge of your inner elbow to your outer wrist crease.' +
            'It passes through the fatty part of your thumbs along your palm to the center of your inner thumb.',

        source_point:'LU-9, located on the inner wrist crease along the thumb side.',

        nl_points:'Find the frontal Lung Neuro-Lymphatics along the top of your sternum. Rub this area often ' +
            'especially with Covid-19. Also make sure to do deep breathing exercises. Find your back Lung NLs ' +
            'at approximately the same level along either side of the spinal cord.',

        nv_points:'Lung Neuro-Vasculars are on the very top of the head.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Spleen strengthens Lung',
        acu_points_strengthen_desc:'To strengthen Lung hold SP-3 and LU-9.',

        acu_points_sedate:'Kidney sedates Lung',
        acu_points_sedate_desc:'To sedate Lung hold LU-5 and KI-10.',
    },

    {id: 8,
        element_id:5,
        element_name:'Metal',
        name: 'Large Intestine',
        short:'LI',
        time_range: '5:00 am-7:00 am',
        start_hour:5,
        end_hour:7,
        yin_yang:'Yang',

        font_color:'color:#c0c0c0',
        background_color:'background-color:#c0c0c0',

        meridian_imbalances: LargeIntestineMeridianImbalance,
        meridian_balance: LargeIntestineMeridianBalance,

        tracingText: LIInstruction,
        affirmation_text:'I let go of fear and live fully in the now',
        affirmations_list:LargeIntestineAffirmation,

        western:LargeIntestineWesternMedicine,
        chinese:LargeIntestineChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/largeIntestine/iconLI.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/largeIntestine/elementLI.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/largeIntestine/attributeLI.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/largeIntestine/animalLI.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/largeIntestine/pathLI.jpg',
        source_pic:'assets/images/energyMedicine/meridians/largeIntestine/sourceLI.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/largeIntestine/nlLI.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/largeIntestine/nvLI.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/largeIntestine/acuPts-ST-STR-LI.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/largeIntestine/acuPts-BL-SED-LI.jpg',

        meridian_path_copy: 'Large Intestine begins the outside edge of your pointer finger. ' +
            'It follows up to the outside of your hand to the outside wrist edge. ' +
            'It flows up your inner outside of your arms to your shoulder and neck.' +
            'It follows along your outer jaw, across your face to the outside nostril edges.' +
            'It completes its path along the sides of your nose.',

        source_point:'LI-4, located at the raised skin when you put your thumb and pointer finger together.',

        nl_points:'Find your frontal Large Intestine Neuro-Lymphatics on the outside of your thighs. Rub this ' +
            'area stroking downward, if you are constipated, opposite if you have Diarrhea. Find your back ' +
            'Large Intestine NLs on your sacral bones. This is also a good area to rub if you are constipated',

        nv_points:'Large Intestine Neuro-Vasculars are on at the side of the head, where you can feel the temporal artery pulsing.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Stomach strengthens Large Intestine ',
        acu_points_strengthen_desc:'To strengthen Large Intestine hold ST-36 and LI-11.',

        acu_points_sedate:'Bladder sedates Large Intestine ',
        acu_points_sedate_desc:'To sedate Large Intestine hold LI-2 and BL-66.',
    },

    {id: 9,
        element_id:4,
        element_name:'Earth',
        name: 'Stomach',
        short: 'ST',
        time_range: '7:00 am - 9:00am',
        start_hour:7,
        end_hour:9,
        yin_yang:'yang',

        font_color:'color:#e2b630',
        background_color:'background-color:#e2b630',

        meridian_imbalances:StomachMeridianImbalance,
        meridian_balance:StomachMeridianBalance,

        affirmation_text:'I trust in the mystery of my life',
        affirmations_list:StomachAffirmation,

        tracingText: STInstruction,

        western:StomachWesternMedicine,
        chinese: StomachChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/stomach/iconST.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/stomach/elementST.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/stomach/attributeST.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/stomach/animalST.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/stomach/pathST.jpg',
        source_pic:'assets/images/energyMedicine/meridians/stomach/sourceST.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/stomach/nlST.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/stomach/nvST.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/stomach/acuPts-SI-STR-ST.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/stomach/acuPts-LI-SED-ST.jpg',

        meridian_path_copy: 'Stomach begins directly under each eye (Stomach 1). ' +
                            'It continues down your face to your jaw. ' +
                            'It then travels back up the sides of your face to your hairline. ' +
                            'Then it moves down the center of your face to your clavicle. ' +
                            'It moves laterally along your clavicles at your nipple line. ' +
                            'It follows down your trunk to the ends of your ribcage. ' +
                            'Moving in about an inch from your mid-line it moves down to your public bone. ' +
                            'It follows down the outer edge of your knee but then veers back to midline. ' +
                            'It ends at the outer side of your second toes (Stomach 45)',

        source_point:'ST-42, located on the dorsum of the foot in the dip where the 2nd and 3rd metatarsal bones meet.',

        nl_points:'Find the frontal Stomach Neuro-Lymphatics in the arc under your left breast and at the top of your upper shoulder edges. ' +
            'Find the back Stomach NLs on either side of the top of your cervical spine and in the center of your shoulder blades near the edges.',

        nv_points:'Find your Stomach Neuro-Vasculars at the center of your jawline. Hold them along with your Main Neuro-Vascular points ' +
            'shown on the picture on the right.',

        acu_points_strengthen: 'Small Intestine strengthens Stomach',
        acu_points_strengthen_desc:'To strengthen Stomach hold SI-5 and ST-41.',

        acu_points_sedate:'Large Intestine sedates Stomach',
        acu_points_sedate_desc:'To sedate Stomach hold LI-1 and ST-45.',
    },

    {id: 10,
        element_id:4,
        element_name:'Earth',
        name: 'Spleen',
        short: 'SP',
        time_range: '9:00 am - 11:00 am',
        start_hour:9,
        end_hour:11,
        yin_yang:'yin',

        font_color:'color:#866911',
        background_color:'background-color:#866911',

        meridian_imbalances:SpleenMeridianImbalance,
        meridian_balance:SpleenMeridianBalance,

        tracingText: SPInstruction,
        affirmation_text:'I nourish myself with love',
        affirmations_list:SpleenAffirmation,

        western:SpleenWesternMedicine,
        chinese:SpleenChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/spleen/iconSP.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/spleen/elementSP.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/spleen/attributeSP.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/spleen/animalSP.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/spleen/pathSP.jpg',
        source_pic:'assets/images/energyMedicine/meridians/spleen/sourceSP.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/spleen/nlSP.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/spleen/nvSP.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/spleen/acuPts-HT-STR-SP.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/spleen/acuPts-LU-SED-SP.jpg',

        meridian_path_copy: 'Spleen starts at the outer side of each of your big toes (Spleen 1). ' +
            'It travels up the insides of each foot to the inside of each ankle bone. ' +
            'It moves up along the inner mid shin and thigh. ' +
            'It heads towards your pubic bone edges. ' +
            'It then moves out to the most prominent edge of the ribcage. ' +
            'It follows along upwards to your armpits. ' +
            'Then it move down along the side of your ribs about halfway.',

        source_point:'SP-3 located along the inside of the foot after the big Metaphalangeal joint.',

        nl_points:'Find your frontal Spleen Neuro-Lymphatics just under your breasts (about an inch) on both side. Find ' +
            'your back Spleen NLs along your spine next to your inner shoulder blades.',

        nv_points:'Spleen Neuro-Vasculars are found about 2 inches directly above your ear tips and at the rounding' +
            ' curve at the back of your head. Hold them along with your Main Neuro-Vascular points' +
            'shown on the picture on the right.',

        acu_points_strengthen:'Heart strengthens Spleen',
        acu_points_strengthen_desc:'To strengthen Spleen hold HT-8 and SP-2.',

        acu_points_sedate:'Lung sedates Spleen',
        acu_points_sedate_desc:'To sedate Spleen hold LU-8 and SP-5.',
    },

    {id: 11,
        element_id:3,
        element_name:'Fire',
        name: 'Heart',
        short:'HT',
        time_range: '11:00 am - 1:00 pm',
        start_hour:11,
        end_hour:13,
        yin_yang:'yin',

        font_color:'color:#c24541',
        background_color:'background-color:#c24541',

        meridian_imbalances: HeartMeridianImbalance,
        meridian_balance:HeartMeridianBalance,

        tracingText: HTInstruction,
        affirmation_text:'I love myself deeply and completely',
        affirmations_list:HeartAffirmation,

        western:HeartWesternMedicine,
        chinese:HeartChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/heart/iconHT.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/heart/elementHT.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/heart/attributeHT.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/heart/animalHT.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/heart/pathHT.jpg',
        source_pic:'assets/images/energyMedicine/meridians/heart/sourceHT.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/heart/nlHT.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/heart/nvHT.jpg',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/heart/acuPts-LR-STR-HT.jpg',

        meridian_path_copy: 'Heart begins in the center of your armpits at Heart-1. ' +
                            'It follows down along your inner elbow on the pinky finger edge. ' +
                            'It ends at the inside edge of your pinky finger pad at Heart-9.',

        source_point:'HT-7, located on the inner wrist crease along the baby finger line.',

        nl_points:'Find your frontal Heart Neuro-Lymphatics just under the center of your clavicles (collarbone). Find your' +
            ' Heart NLs along the top of your shoulder blades about 3 inches from your spine and along the top of your spine ' +
            '(where you can lift your hands over your head and reach behind to reach them).',

        nv_points:'Heart Neuro-Vasculars are at the top of your head. Hold them along with your Main Neuro-Vascular points ' +
            'shown on the picture on the right.',

        acu_points_strengthen: 'Liver strengthens Heart',
        acu_points_strengthen_desc:'Hold LR-1 found at the inner edge of your big toenail and HT-9 found at the tip of your pinky finger',
    },

    {id: 12,
        element_id:3,
        element_name:'Fire',
        name: 'Small Intestine',
        short:'SI',
        time_range: '1:00 pm - 3:00 pm',
        start_hour:13,
        end_hour:15,
        yin_yang:'yang',
        font_color:'color:#e8abaa',
        background_color:'background-color:#e8abaa',

        meridian_imbalances: SmallIntestineMeridianImbalance,
        meridian_balance:SmallIntestineMeridianBalance,

        tracingText: SIInstruction,
        affirmation_text:'I know what I want in life, I am decisive',
        affirmations_list:SmallIntestineAffirmation,

        western:SmallIntestineWesternMedicine,
        chinese:SmallIntestineChineseMedicine,

        meridian_icon: 'assets/images/energyMedicine/meridians/smallIntestine/iconSI.jpg',
        meridian_element_pic: 'assets/images/energyMedicine/meridians/smallIntestine/elementSI.jpg',
        meridian_attribute_pic: 'assets/images/energyMedicine/meridians/smallIntestine/attributeSI.jpg',
        meridian_animal_pic: 'assets/images/energyMedicine/meridians/smallIntestine/animalSI.jpg',
        meridian_path_pic: 'assets/images/energyMedicine/meridians/smallIntestine/pathSI.jpg',
        source_pic:'assets/images/energyMedicine/meridians/smallIntestine/sourceSI.jpg',
        nl_pic:'assets/images/energyMedicine/meridians/smallIntestine/nlSI.jpg',
        nv_pic:'assets/images/energyMedicine/meridians/smallIntestine/nvSI.jpg ',
        acu_points_strengthen_pic:'assets/images/energyMedicine/meridians/smallIntestine/acuPts-GB-STR-SI.jpg',
        acu_points_sedate_pic:'assets/images/energyMedicine/meridians/smallIntestine/acuPts-ST-SED-SI.jpg',

        meridian_path_copy: 'Small Intestine starts on the outer side of your hand at baby finger (Small Intestine 1). ' +
            'It follows up your arm towards your outer wrist, moving over the protruding wrist bone. ' +
            'It moves along the outer edge of your arm past to funny bone to your middle outer shoulder.' +
            'It juts slightly towards your back shoulder and then arrives at the side of your neck. ' +
            'It moves along the sides of your nect to arrive under your cheekbones. ' +
            'It finishes up across your cheek at the edge of your ears (Small Intestine 19).',

        source_point:'SI-4 is located at the wrist crease right before the Triquetral bone.',

        nl_points:'Find the frontal Small Intestine Neuro-Lymphatics in the upside down U shape your ribs ' +
            'make and along your inner thighs. Find your back Small Intesting NLS along your center spine ' +
            'at the location you can reach when reaching your hands behind your back.',

        nv_points:'Small Intestine Neuro-Vasculars at the side of your head (feel for the arterial pulse there.' +
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_strengthen: 'Gallbladder strengthens Small Intestine',
        acu_points_strengthen_desc:'To strengthen Small Intestine hold GB-41  and SI-3',

        acu_points_sedate:'Stomach sedates Small Intestine',
        acu_points_sedate_desc:'To sedate Small Intestine hold ST-36 and SI-8.',
    }

];

