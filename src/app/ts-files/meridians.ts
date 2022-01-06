import { Meridian} from './meridian';

import {SPInstruction, STInstruction, HTInstruction, SIInstruction, BLInstruction, KIInstruction, PCInstruction,
        TWInstruction, GBInstruction, LRInstruction, LUInstruction, LIInstruction, CTInstruction, GVInstruction}
from "./tracing-instructions";

import {CentralMeridianBalance, GoverningMeridianBalance, StomachMeridianBalance, SpleenMeridianBalance, HeartMeridianBalance,
    SmallIntestineMeridianBalance, BladderMeridianBalance, KidneyMeridianBalance, PericardiumMeridianBalance, TripleWarmerMeridianBalance,
    GallbladderMeridianBalance, LiverMeridianBalance, LungMeridianBalance, LargeIntestineMeridianBalance}
    from "./meridian-balances";

import {
    StomachMeridianImbalance, BladderMeridianImbalance, GallbladderMeridianImbalance, HeartMeridianImbalance, KidneyMeridianImbalance,
    LargeIntestineMeridianImbalance, LiverMeridianImbalance, LungMeridianImbalance, PericardiumMeridianImbalance, SmallIntestineMeridianImbalance,
    SpleenMeridianImbalance, TripleWarmerMeridianImbalance, CentralMeridianImbalance, GoverningMeridianImbalance
} from "./meridian-physical-imbalances";

import {StomachChineseMedicine, SpleenChineseMedicine, HeartChineseMedicine, SmallIntestineChineseMedicine, BladderChineseMedicine,
    KidneyChineseMedicine, PericardiumChineseMedicine, TripleWarmerChineseMedicine, GallbladderChineseMedicine, LiverChineseMedicine,
    LungChineseMedicine, LargeIntestineChineseMedicine, CentralChineseMedicine, GoverningChineseMedicine}
    from "./chinese-medicine"

import {StomachWesternMedicine, SpleenWesternMedicine, HeartWesternMedicine, SmallIntestineWesternMedicine, BladderWesternMedicine,
    KidneyWesternMedicine, PericardiumWesternMedicine, TripleWarmerWesternMedicine, GallbladderWesternMedicine, LiverWesternMedicine,
    LungWesternMedicine, LargeIntestineWesternMedicine, CentralWesternMedicine, GoverningWesternMedicine}
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

        meridian_icon: 'assets/images/meridians/bladder/iconBL.jpg',
        meridian_element_pic: 'assets/images/meridians/bladder/elementBL.jpg',
        meridian_attribute_pic: 'assets/images/meridians/bladder/attributeBL.jpg',
        meridian_animal_pic: 'assets/images/meridians/bladder/animalBL.jpg',

        meridian_path_pic: 'assets/images/meridians/bladder/pathBL.jpg',
        meridian_path_copy: 'Bladder begins at the area between your eyes (Bladder 1). ' +
            'It moves up and over your head to the back of your neck. ' +
            'It follows down about an inch on either side of your spine.' +
            'It flows down to mid buttock at the sacrum and then back up over your hips.' +
            'It stops there and then starts again about 3 inches on either side of your spine.' +
            'It stops there and then starts again at your neck moving down about 3 inches on either side of your spine.' +
            'It follows down the inside of your back thighs and calves, to your outer feet, ending at the baby toes.',

        font_color:'color:#4298ED',
        background_color:'background-color:#4298ED',

        meridian_imbalances: BladderMeridianImbalance,
        meridian_balance:BladderMeridianBalance,

        tracingText: BLInstruction,
        affirmation_text:'I feel vibrant, hopeful and fully alive',
        affirmations_list:BladderAffirmation,

        western:BladderWesternMedicine,
        chinese:BladderChineseMedicine,

        source_pic:'assets/images/meridians/bladder/sourceBL.jpg',
        source_point:'BL-64, located in front of the tuberosity of the 5th metatarsal bone.',

        nl_pic:'assets/images/meridians/bladder/nlBL.jpg',
        nl_points:'Find your frontal Bladder Neuro-Lymphatics about an inch on either side of your center line at your navel. ' +
            'Find your back Bladder NLs along your spine at waist level.',

        nv_pic:'assets/images/meridians/bladder/nvBL.jpg',
        nv_points:'Bladder Neuro-Vasculars are right between your eyebrows (this is also the start of Bladder meridian - BL-1).' +
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen: 'Bladder strengthens Gallbladder',
        acu_points_sender_strengthen_acu:'BL-66 strengthens GB-43',
        acu_points_sender_strengthen_desc:'Bladder strengthens Gallbladder. Hold GB-43, right between the toe joint and the metatarsal joint ' +
            'and BL-66, right between the toe joint ' +
            'and the metatarsal joint.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/bladder/acuPts-BL-STR-GB.jpg',

        acu_points_sender_sedate:'Bladder sedates Large Intestine',
        acu_points_sender_sedate_acu:'BL-66 sedates LI-2',
        acu_points_sender_sedate_desc:'Bladder sedate Large Intestine.  hold LI-2, distal to MCP joint where pointer joins hand and BL-66 ' +
            'just after the baby toe in the crease.',
        acu_points_sender_sedate_pic:'assets/images/meridians/bladder/acuPts-BL-SED-LI.jpg',

        acu_points_sender_control:'Bladder controls Small Intestine',
        acu_points_sender_control_acu:'BL-66 controls SI-2',
        acu_points_sender_control_desc:'To stop the flow to Small Intestine hold SI-2 and BL-66',
        acu_points_sender_control_pic:'assets/images/meridians/bladder/acuPts-BL-CTR-SI.jpg',

        acu_points_sender_control2:'Bladder controls Triple Warmer',
        acu_points_sender_control_acu2:'BL-66 controls TW-2',
        acu_points_sender_control_desc2:'To stop the flow to Triple Warmer hold TW-2 and BL-66',
        acu_points_sender_control_pic2:'assets/images/meridians/bladder/acuPts-BL-CTR-TW.jpg',

        acu_points_receiver_strengthen: 'Large Intestine strengthens Bladder',
        acu_points_receiver_strengthen_desc:'LI-1 strengthens BL-67.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/largeIntestine/acuPts-LI-STR-BL.jpg',

        acu_points_receiver_sedate:'Gallbladder sedates Bladder',
        acu_points_receiver_sedate_desc:'Gallbladder sedate Bladder. Hold GB-41 and BL-65.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/gallbladder/acuPts-GB-SED-BL.jpg',

        acu_points_receiver_control:'Stomach controls Bladder',
        acu_points_receiver_control_desc:'To stop the flow to Bladder hold ST-36 and BL-40',
        acu_points_receiver_control_pic:'assets/images/meridians/stomach/acuPts-ST-CTR-BL.jpg',
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

        meridian_icon: 'assets/images/meridians/kidney/iconKI.jpg',
        meridian_element_pic: 'assets/images/meridians/kidney/elementKI.jpg',
        meridian_attribute_pic: 'assets/images/meridians/kidney/attributeKI.jpg',
        meridian_animal_pic: 'assets/images/meridians/kidney/animalKI.jpg',

        meridian_path_pic: 'assets/images/meridians/kidney/pathKI.jpg',
        meridian_path_copy: 'Kidney begins under your feet, in the center between the arch and pads. ' +
            '(Found by flexing your feet and locating the dent). ' +
            'It moves up from Kidney 1 following the inside of your feet.' +
            'It makes a little circle around the inside of your ankle.' +
            'It follows up the inside of your shin, knees, thighs to your pubic area.' +
            'It traces straight up the center of the trunk to the nipple level.' +
            'It moves out about 2 inches laterally and stops at Kidney 27 just under the clavicles.',

        font_color:'color:#2D6BB4',
        background_color:'background-color:#2D6BB4',

        meridian_imbalances: KidneyMeridianImbalance,
        meridian_balance:KidneyMeridianBalance,

        tracingText: KIInstruction,
        affirmation_text:'I move forward in my life, with confidence',
        affirmations_list:KidneyAffirmation,

        western:KidneyWesternMedicine,
        chinese:KidneyChineseMedicine,

        source_pic:'assets/images/meridians/kidney/source-KI.jpg',
        source_point:'KI-3, located between the tip of the Medial Malleolus and the Achilles Tendon.',

        nl_pic:'assets/images/meridians/kidney/neuroLymph-KI.jpg',
        nl_points:'Find your frontal Kidney Neuro-Lymphatics about an inch down from your throat notch and two inches ' +
            'out from your center. This is Kidney 27 and is very helpful to tap when you are tired. Also find ' +
            'them on the inside of your upper shoulders and upper arms. Find your back Kidney NLs next to the big bump ' +
            'on your spine (Cervical 7). To get to your lower Kidney NLs reach your hands behind your waist so that ' +
            'your thumbs are reaching for your spine, this allows you to move up to those Kidney points.',

        nv_pic:'assets/images/meridians/kidney/nvKI.jpg',
        nv_points:'Kidney Neuro-Vasculars at the side of your head (you can feel the temporal artery pulsing), ' +
            'at the base of the head, alongside the middle of the ears and at the upper jawline.' +
        ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen: 'Kidney strengthens Liver',
        acu_points_sender_strengthen_acu:'KI-10 strengthens LR-8',

        acu_points_sender_strengthen_desc:'Hold LR-8 at the inner edge of your knee and KI-10 in the back of your knee between the tendons',
        acu_points_sender_strengthen_pic:'assets/images/meridians/kidney/acuPts-KI-STR-LR.jpg',

        acu_points_sender_sedate:'Kidney sedates Lung',
        acu_points_sender_sedate_acu:'KI-10 sedates LU-5',

        acu_points_sender_sedate_desc:'To sedate Lung hold LU-5, in the center of the elbow crease along the thumb line and KI-10, ' +
            'at the edge of the inner knee between the two tendons.',
        acu_points_sender_sedate_pic:'assets/images/meridians/kidney/acuPts-KI-SED-LU.jpg',

        acu_points_sender_control:'Kidney controls Heart',
        acu_points_sender_control_acu:'KI-10 strengthens HT-3',
        acu_points_sender_control_desc:'Hold KI-10 between the two tendons at the back of the knee and HT-3 at the pinky side edge of the back elbow.',
        acu_points_sender_control_pic:'assets/images/meridians/kidney/acuPts-KI-CTR-HT.jpg',

        acu_points_sender_control2:'Kidney controls Pericardium',
        acu_points_sender_control_acu2:'KI-10 strengthens PC-3',
        acu_points_sender_control_desc2:'To stop the flow hold KI-10 between the two tendons at the back of the knee and PC-3 at the very center ' +
            'of the back elbow.',
        acu_points_sender_control_pic2:'assets/images/meridians/kidney/acuPts-KI-CTR-PC.jpg',

        acu_points_receiver_strengthen: 'Lung strengthens Kidney',
        acu_points_receiver_strengthen_desc:'Hold LU-8 and KI-7',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/lungs/acuPts-LU-STR-KI.jpg',

        acu_points_receiver_sedate:'Liver sedates Kidney',
        acu_points_receiver_sedate_desc:'To sedate Kidney hold LR-1 and KI-1.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/liver/acuPts-LR-SED-KI.jpg',

        acu_points_receiver_control:'Spleen controls Kidney',
        acu_points_receiver_control_desc:'To stop the flow of Kidney hold SP-3 and KI-3.',
        acu_points_receiver_control_pic:'assets/images/meridians/spleen/acuPts-SP-CTR-KI.jpg',
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

        meridian_icon: 'assets/images/meridians/pericardium/iconPC.jpg',
        meridian_element_pic: 'assets/images/meridians/pericardium/elementPC.jpg',
        meridian_attribute_pic: 'assets/images/meridians/pericardium/attributePC.jpg',
        meridian_attribute_pic2: 'assets/images/meridians/pericardium/attributePC2.jpg',
        meridian_animal_pic: 'assets/images/meridians/pericardium/animalPC.jpg',

        meridian_path_pic: 'assets/images/meridians/pericardium/pathPC.jpg',
        meridian_path_copy: 'Pericardium begins at the outer edge of your nipples Pericardium-1. ' +
            'It moves laterally to the edge of your chest and then up to your shoulders. ' +
            'Once at the top front of your shoulders, it follows down the center of your arm.' +
            'It travels down to the middle of your inner wrist crease, down to your middle fingertip.',

        font_color:'color:#c24541',
        background_color:'background-color:#c24541',

        meridian_imbalances: PericardiumMeridianImbalance,
        meridian_balance: PericardiumMeridianBalance,

        tracingText: PCInstruction,
        affirmation_text:'I take excellent care of my Heart',
        affirmations_list:PericardiumAffirmation,

        western:PericardiumWesternMedicine,
        chinese:PericardiumChineseMedicine,

        source_pic:'assets/images/meridians/pericardium/sourcePC.jpg',
        source_point:'PC-7, located in the very center of the inner wrist crease, along the middle finger.',

        nl_pic:'assets/images/meridians/pericardium/nlPC.jpg',
        nl_points:'Find your frontal Pericardium Neuro-Lymphatics along the top of your pubic bone (Bladder is also here). ' +
            'Find the other frontal PC NLs on the front of your inner thighs. Find your back NLs just under your shoulder ' +
            'blades (reach back at that level and your fingers will land there. Find the other back NLS at your Coccyx.',

        nv_pic:'assets/images/meridians/pericardium/nvPC.jpg',
        nv_points:'Pericardium Neuro-Vasculars at the side of your head (you can feel the temporal artery pulsing), ' +
            'at the back side of the head, alongside the edges of your eyebrows.'+
        ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_receiver_strengthen: 'Liver strengthens Pericardium',
        acu_points_sender_strengthen_acu:'LR-1 strengthens PC-9',

        acu_points_receiver_strengthen_desc:'Hold LR-1 at the inside nail of the big toe and PC-9 and the tip of the middle finger',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/liver/acuPts-LR-STR-PC.jpg',

        acu_points_receiver_sedate:'Spleen sedates Pericardium',
        acu_points_sender_sedate_acu:'SP-3 sedates PC-7',

        acu_points_receiver_sedate_desc:'To sedate Pericardium hold PC-7 and SP-3.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/spleen/acuPts-SP-SED-PC.jpg',

        acu_points_receiver_control:'Kidney controls Pericardium',
        acu_points_receiver_control_desc:'To stop the flow of Pericardium hold KI-10 and PC-3.',
        acu_points_receiver_control_pic:'assets/images/meridians/kidney/acuPts-KI-CTR-PC.jpg',
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

        meridian_icon: 'assets/images/meridians/tripleWarmer/iconTW.jpg',
        meridian_element_pic: 'assets/images/meridians/tripleWarmer/elementTW.jpg',
        meridian_attribute_pic: 'assets/images/meridians/tripleWarmer/attributeTW.jpg',
        meridian_attribute_pic2: 'assets/images/meridians/tripleWarmer/attributeTW2.jpg',
        meridian_animal_pic: 'assets/images/meridians/tripleWarmer/animalTW.jpg',

        meridian_path_pic: 'assets/images/meridians/tripleWarmer/pathTW.jpg',
        meridian_path_copy: 'Triple Warmer starts on your outer hand at your ring finger - Triple Warmer 1. ' +
            'It moves up your hand and along the outer elbow, the funny bone area. ' +
            'It then follows along the tops of your shoulders to the back of your neck.' +
            'It traces up the side of your neck to just under your ear.' +
            'It moves behind your ears to the tops, and then flows across your face to your outer eyebrows.',

        font_color:'color:#e8abaa',
        background_color:'background-color:#e8abaa',

        meridian_imbalances: TripleWarmerMeridianImbalance,
        meridian_balance: TripleWarmerMeridianBalance,

        tracingText: TWInstruction,
        affirmation_text:'I honour my Inner Warrior who keeps me safe',
        affirmations_list:TripleWarmerAffirmation,

        western:TripleWarmerWesternMedicine,
        chinese:TripleWarmerChineseMedicine,

        source_pic:'assets/images/meridians/tripleWarmer/sourceTW.jpg',
        source_point:'TW-4, located on the transverse crease in the dip on the dorsum of the wrist.',

        nl_pic:'assets/images/meridians/tripleWarmer/nlTW.jpg',
        nl_points:'Find your frontal Triple Warmer Neuro-Lymphatics about an inch below your navel and an inch lateral to it. ' +
            'This is also known as the Dantian Point. Find the back Triple Warmer NLs at the top of the spine alongside the ' +
            'shoulders and the bottom of the spine under your ribcage.',

        nv_pic:'assets/images/meridians/tripleWarmer/nvTW.jpg',
        nv_points:'Triple Warmer Neuro-Vasculars at the back of your head about 2/3rds of the way up and ' +
            'just in front of your ear (tragus) - where TW meridian ends - TW-23.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_receiver_strengthen: 'Gallbladder strengthens Triple Warmer',
        acu_points_sender_strengthen_acu:'LR-1 strengthens PC-9',

        acu_points_receiver_strengthen_desc:'To strengthen Triple Warmer hold GB-41 and TW-3',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/gallbladder/acuPts-GB-STR-TW.jpg',

        acu_points_receiver_sedate:'Stomach sedates Triple Warmer',


        acu_points_receiver_sedate_desc:'To sedate Small Intestine hold ST-36 and TW-10.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/stomach/acuPts-ST-SED-TW.jpg',

        acu_points_receiver_control:'Bladder stops the flow of Triple Warmer',
        acu_points_receiver_control_desc:'To stop the flow to Triple Warmer hold TW-2 and BL-66',
        acu_points_receiver_control_pic:'assets/images/meridians/bladder/acuPts-BL-CTR-TW.jpg',
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

        meridian_icon: 'assets/images/meridians/gallbladder/iconGB.jpg',
        meridian_element_pic: 'assets/images/meridians/gallbladder/elementGB.jpg',
        meridian_attribute_pic: 'assets/images/meridians/gallbladder/attributeGB.jpg',
        meridian_animal_pic: 'assets/images/meridians/gallbladder/animalGB.jpg',

        meridian_path_pic: 'assets/images/meridians/gallbladder/pathGB.jpg',
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

        font_color:'color:#8ec270',
        background_color:'background-color:#8ec270',

        meridian_imbalances: GallbladderMeridianImbalance,
        meridian_balance: GallbladderMeridianBalance,

        tracingText: GBInstruction,
        affirmation_text:'I assert myself peacefully and release judgement easily',
        affirmations_list:GallBladderAffirmation,

        western:GallbladderWesternMedicine,
        chinese:GallbladderChineseMedicine,

        source_pic:'assets/images/meridians/gallbladder/sourceGB.jpg',
        source_point:'GB- located at the ankle joint, in the dip infront of but behind the Lateral Malleolus.',

        nl_pic:'assets/images/meridians/gallbladder/nlGB.jpg',
        nl_points:'Find your frontal Gallbladder Neuro-Lymphatics along your sternum (Lung NLs are there also). ' +
            'Find your back Gallbladder NLs along your spine at the level of your shoulder blade centers and' +
            'a few inches below your ribcage. Find your GB NL on your legs about 4 inches from your hip bone tops. ',

        nv_pic:'assets/images/meridians/gallbladder/nvGB.jpg',
        nv_points:'Gallbladder Neuro-Vasculars are on the very top of the head.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen: 'Gallbladder Strengthens Small Intestine',
        acu_points_sender_strengthen_acu:'GB-41 strengthens SI-3',
        acu_points_sender_strengthen_desc:'To strengthen Small Intestine hold SI-3, in dip proximal to head of Meta Carpal bone and GB-41, ' +
            'in the dip distal to junction of the 4th & 5th MetaTarsals (flex toes for tendon).',

         acu_points_sender_strengthen_pic:'assets/images/meridians/gallbladder/acuPts-GB-STR-SI.jpg',

        acu_points_sender_strengthen2: 'Gallbladder Strengthens Triple Warmer',
        acu_points_sender_strengthen_acu2:'GB-41 strengthens TW-3',
        acu_points_sender_strengthen_desc2:'To strengthen Triple Warmer hold TW-3, in the dip betw. 4th & 5th metacarpals, ' +
            'proximal to MetaCarpal joint and GB-41, in the dip distal to junction of 4th & 5th MTs (flex toes for tendon).',

        acu_points_sender_strengthen_pic2:'assets/images/meridians/gallbladder/acuPts-GB-STR-TW.jpg',

        acu_points_sender_sedate:'Gallbladder sedates Bladder',
        acu_points_sender_sedate_acu:'GB-41 sedates BL-65',

        acu_points_sender_sedate_desc:'To sedate Bladder hold BL-65 posterior to the baby toes Metatarsal Phalangeal joint and GB-41, in the dip distal ' +
            'to the junction of the 4th & 5th Metatarsals (flex toes for tendon).',
        acu_points_sender_sedate_pic:'assets/images/meridians/gallbladder/acuPts-GB-SED-BL.jpg',

        acu_points_sender_control:'Gallbladder controls Stomach',
        acu_points_sender_control_acu:'GB-41 controls ST-43',

        acu_points_sender_control_desc:'Hold ST-43 on the dorsum of the foot and GB-41 along the line of the 4th toe above the bump.',
        acu_points_sender_control_pic:'assets/images/meridians/gallbladder/acuPts-GB-CTR-ST.jpg',

        acu_points_receiver_strengthen: 'Bladder Strengthens Gallbladder',
        acu_points_receiver_strengthen_desc:'To strengthen Gallbladder hold BL-66 and GB-43.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/bladder/acuPts-BL-STR-GB.jpg',

        acu_points_receiver_sedate:'Small Intestine sedates Gallbladder',
        acu_points_receiver_sedate_desc:'To sedate Gallbladder hold SI-5 and GB-38.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/smallIntestine/acuPts-SI-SED-GB.jpg',

        acu_points_receiver_control:'Large Intestine controls Gallbladder',
        acu_points_receiver_control_desc:'Hold LI-1 and GB-44',
        acu_points_receiver_control_pic:'assets/images/meridians/largeIntestine/acuPts-LI-CTR-GB.jpg',
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

        meridian_icon: 'assets/images/meridians/liver/iconLR.jpg',
        meridian_element_pic: 'assets/images/meridians/liver/elementLR.jpg',
        meridian_attribute_pic: 'assets/images/meridians/liver/attributeLR.jpg',
        meridian_animal_pic: 'assets/images/meridians/liver/animalLR.jpg',

        meridian_path_pic: 'assets/images/meridians/liver/pathLR.jpg',
        meridian_path_copy: 'Liver starts on the inside edge of your big toes (Liver-1). ' +
            'It follows up the inner side of your feet to your inner ankles. ' +
            'It traces upwards to your knees till it reaches the outer pelvic edge. ' +
            'It angles sharply to the outer edges of your waist. ' +
            'It then angles sharply to just under your ribcage in line with your nipples. ',

        font_color:'color:#2A6E31',
        background_color:'background-color:#2A6E31',

        meridian_imbalances: LiverMeridianImbalance,
        meridian_balance: LiverMeridianBalance,

        tracingText: LRInstruction,
        affirmation_text:'I am kind to myself',
        affirmations_list:LiverAffirmation,

        western:LiverWesternMedicine,
        chinese:LiverChineseMedicine,

        source_pic:'assets/images/meridians/liver/sourceLR.jpg',
        source_point:'LR-3, located on the dorsum of the foot, along the inside of the big toe and after the tuberosity.',

        nl_pic:'assets/images/meridians/liver/nlLR.jpg',
        nl_points:'Find your frontal Liver Neuro-Lymphatics along the upside down U that forms right under your right breast. ' +
            'Find the back Liver NLs at about the center between the top of the spine and the bottom, on either side of the spinal cord.',

        nv_pic:'assets/images/meridians/liver/nvLR.jpg',
        nv_points:'Liver Neuro-Vasculars are on the very top of the head as well as being found along the hairline, about an inch ' +
            'on either side of the very center.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen: 'Liver strengthens Heart',
        acu_points_sender_strengthen_acu:'LR-1 strengthens HT-9',
        acu_points_sender_strengthen_desc:'To strengthen Heart hold LR-1, at the inside (medial) edge of the big toe nail and HT-9 at the inside edge' +
            ' of the pinky finger nail.',
         acu_points_sender_strengthen_pic:'assets/images/meridians/liver/acuPts-LR-STR-HT.jpg',

        acu_points_sender_strengthen2: 'Liver strengthens Pericardium',
        acu_points_sender_strengthen_acu2:'LR-1 strengthens PC-9',
        acu_points_sender_strengthen_desc2:'To strengthen Pericardium hold PC-9 at the inner tip of the middle finger and LR-1, at the inner edge of the big toe nail.',
        acu_points_sender_strengthen_pic2:'assets/images/meridians/liver/acuPts-LR-STR-PC.jpg',

        acu_points_sender_sedate:'Liver sedates Kidney',
        acu_points_sender_sedate_acu:'LR-1 sedates KI-1',

        acu_points_sender_sedate_desc:'To sedate Kidney hold KI-1, under the foot between the bunion area and the toe tips in the center of the foot and LR-1,' +
            'at the inner nail edge of the big toe.',
        acu_points_sender_sedate_pic:'assets/images/meridians/liver/acuPts-LR-SED-KI.jpg',

        acu_points_sender_control:'Liver controls Spleen',
        acu_points_sender_control_acu:'LR-1 controls SP-1',

        acu_points_sender_control_desc:'To stop the flow to Spleen hold LR-1 and SP-1',
        acu_points_sender_control_pic:'assets/images/meridians/liver/acuPts-LR-CTR-SP.jpg',

        acu_points_receiver_strengthen: 'Kidney strengthens Liver',
        acu_points_receiver_strengthen_desc:'To strengthen Liver hold KI-10 and LR-8.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/kidney/acuPts-KI-STR-LR.jpg',

        acu_points_receiver_sedate:'Heart sedates Liver',
        acu_points_receiver_sedate_desc:'To sedate Liver hold HT-8 and LR-2.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/heart/acuPts-HT-SED-LR.jpg',

        acu_points_receiver_control:'Lung controls Liver',
        acu_points_receiver_control_desc:'To stop the flow to Liver hold LU-8 and LR-4',
        acu_points_receiver_control_pic:'assets/images/meridians/lungs/acuPts-LU-CTR-LR.jpg',
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

        meridian_icon: 'assets/images/meridians/lungs/iconLU.jpg',
        meridian_element_pic: 'assets/images/meridians/lungs/elementLU.jpg',
        meridian_attribute_pic: 'assets/images/meridians/lungs/attributeLU.jpg',
        meridian_animal_pic: 'assets/images/meridians/lungs/animalLU.jpg',

        meridian_path_pic: 'assets/images/meridians/lungs/pathLU.jpg',
        meridian_path_copy: 'Lung begins on either side of your chest where suspenders would sit. ' +
            'It moves up an inch to your upper inner shoulder. ' +
            'It moves down your inner arm, in line with your thumb.' +
            'It follows down the edge of your inner elbow to your outer wrist crease.' +
            'It passes through the fatty part of your thumbs along your palm to the center of your inner thumb.',

        font_color:'color:#7f8386',
        background_color:'background-color:#7f8386',

        meridian_imbalances: LungMeridianImbalance,
        meridian_balance: LungMeridianBalance,

        tracingText: LUInstruction,
        affirmation_text:'I let go of stale Chi and breathe in fresh Chi and inspiration',
        affirmations_list:LungAffirmation,

        western:LungWesternMedicine,
        chinese:LungChineseMedicine,

        source_pic:'assets/images/meridians/lungs/sourceLU.jpg',
        source_point:'LU-9, located on the inner wrist crease along the thumb side.',

        nl_pic:'assets/images/meridians/lungs/nlLU.jpg',
        nl_points:'Find the frontal Lung Neuro-Lymphatics along the top of your sternum. Rub this area often ' +
            'especially with Covid-19. Also make sure to do deep breathing exercises. Find your back Lung NLs ' +
            'at approximately the same level along either side of the spinal cord.',

        nv_pic:'assets/images/meridians/lungs/nvLU.jpg',
        nv_points:'Lung Neuro-Vasculars are on the very top of the head.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen: 'Lung strengthens Kidney',
        acu_points_sender_strengthen_acu:'LU-8 strengthens KI-7',

        acu_points_sender_strengthen_desc:'To strengthen Kidney hold KI-7, about 2" above the bump of the inner Medial Malleolus and LU-8, at the inner wrist ' +
            'crease about an inch up and alongside the thumb line.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/lungs/acuPts-LU-STR-KI.jpg',

        acu_points_sender_sedate:'Lung sedates Spleen',
        acu_points_sender_sedate_acu:'LU-8 sedates SP-5',

        acu_points_sender_sedate_desc:'To sedate Spleen hold SP-5, in dip directly below center of MM (below LR-4) and LU-8 about an inch ' +
            'up from the wrist along the thumb line.',
        acu_points_sender_sedate_pic:'assets/images/meridians/lungs/acuPts-LU-SED-SP.jpg',

        acu_points_sender_control:'Lung controls Liver',
        acu_points_sender_control_acu:'LR-4 controls LU-8',

        acu_points_sender_control_desc:'Hold Liver 4 and Lung 8 at the inner wrist crease.',
        acu_points_sender_control_pic:'assets/images/meridians/lungs/acuPts-LU-CTR-LR.jpg',

        acu_points_receiver_strengthen: 'Spleen strengthens Lung',
        acu_points_receiver_strengthen_desc:'To strengthen Lung hold SP-3 and LU-9.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/spleen/acuPts-SP-STR-LU.jpg',

        acu_points_receiver_sedate:'Kidney sedates Lung',
        acu_points_receiver_sedate_desc:'To sedate Lung hold LU-5 and KI-10.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/kidney/acuPts-KI-SED-LU.jpg',

        acu_points_receiver_control:'Heart controls Lung',
        acu_points_receiver_control_desc:'Hold HT-8 and LU-10.',
        acu_points_receiver_control_pic:'assets/images/meridians/heart/acuPts-HT-CTR-LU.jpg',
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

        meridian_icon: 'assets/images/meridians/largeIntestine/iconLI.jpg',
        meridian_element_pic: 'assets/images/meridians/largeIntestine/elementLI.jpg',
        meridian_attribute_pic: 'assets/images/meridians/largeIntestine/attributeLI.jpg',
        meridian_animal_pic: 'assets/images/meridians/largeIntestine/animalLI.jpg',

        meridian_path_pic: 'assets/images/meridians/largeIntestine/pathLI.jpg',
        meridian_path_copy: 'Large Intestine begins the outside edge of your pointer finger. ' +
            'It follows up to the outside of your hand to the outside wrist edge. ' +
            'It flows up your inner outside of your arms to your shoulder and neck.' +
            'It follows along your outer jaw, across your face to the outside nostril edges.' +
            'It completes its path along the sides of your nose.',

        font_color:'color:#c0c0c0',
        background_color:'background-color:#c0c0c0',

        meridian_imbalances: LargeIntestineMeridianImbalance,
        meridian_balance: LargeIntestineMeridianBalance,

        tracingText: LIInstruction,
        affirmation_text:'I let go of fear and live fully in the now',
        affirmations_list:LargeIntestineAffirmation,

        western:LargeIntestineWesternMedicine,
        chinese:LargeIntestineChineseMedicine,

        source_pic:'assets/images/meridians/largeIntestine/sourceLI.jpg',
        source_point:'LI-4, located at the raised skin when you put your thumb and pointer finger together.',

        nl_pic:'assets/images/meridians/largeIntestine/nlLI.jpg',
        nl_points:'Find your frontal Large Intestine Neuro-Lymphatics on the outside of your thighs. Rub this ' +
            'area stroking downward, if you are constipated, opposite if you have Diarrhea. Find your back ' +
            'Large Intestine NLs on your sacral bones. This is also a good area to rub if you are constipated',

        nv_pic:'assets/images/meridians/largeIntestine/nvLI.jpg',
        nv_points:'Large Intestine Neuro-Vasculars are on at the side of the head, where you can feel the temporal artery pulsing.'+
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen:'Large Intestine strengthens Bladder',
        acu_points_sender_strengthen_acu:'LI-1 strengthens BL-67',

        acu_points_sender_strengthen_desc:'To strengthen Bladder hold BL-67 at the end of the baby toe and LI-1 at the outer edge of the pointer finger on the same side.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/largeIntestine/acuPts-LI-STR-BL.jpg',

        acu_points_sender_sedate:'Large Intestine sedates Stomach',
        acu_points_sender_sedate_acu:'LI-1 sedates ST-45',

        acu_points_sender_sedate_desc:'To sedate Stomach HOLD ST-45 - at the lateral side of your 2nd toe next to the big toe and LI-1 - ' +
            'at the tip of your pointer finger on the edge nearest the thumb.',
        acu_points_sender_sedate_pic:'assets/images/meridians/largeIntestine/acuPts-LI-SED-ST.jpg',

        acu_points_sender_control:'Large Intestine controls Gallbladder',
        acu_points_sender_control_acu:'LI-1 controls GB-44',

        acu_points_sender_control_desc:'To stop the flow of Gallbladder hold LI-1 at the tip of the pointer finger and GB-44 at the end of your 4th toenail.',
        acu_points_sender_control_pic:'assets/images/meridians/largeIntestine/acuPts-LI-CTR-GB.jpg',

        acu_points_receiver_strengthen: 'Stomach strengthens Large Intestine ',
        acu_points_receiver_strengthen_desc:'To strengthen Large Intestine hold ST-36 and LI-11.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/stomach/acuPts-ST-STR-LI.jpg',

        acu_points_receiver_sedate:'Bladder sedates Large Intestine ',
        acu_points_receiver_sedate_desc:'To sedate Large Intestine hold LI-2 and BL-66.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/bladder/acuPts-BL-SED-LI.jpg',

        acu_points_receiver_control:'Small Intestine controls Large Intestine ',
        acu_points_receiver_control_desc:'To control Large Intestine hold SI-5 and LI-5.',
        acu_points_receiver_control_pic:'assets/images/meridians/smallIntestine/acuPts-SI-CTR-LI.jpg',
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
        meridian_icon: 'assets/images/meridians/stomach/iconST.jpg',
        meridian_element_pic: 'assets/images/meridians/stomach/elementST.jpg',
        meridian_attribute_pic: 'assets/images/meridians/stomach/attributeST.jpg',
        meridian_animal_pic: 'assets/images/meridians/stomach/animalST.jpg',

        meridian_path_pic: 'assets/images/meridians/stomach/pathST.jpg',
        meridian_path_copy: 'Stomach begins directly under each eye (Stomach 1). ' +
                            'It continues down your face to your jaw. ' +
                            'It then travels back up the sides of your face to your hairline. ' +
                            'Then it moves down the center of your face to your clavicle. ' +
                            'It moves laterally along your clavicles at your nipple line. ' +
                            'It follows down your trunk to the ends of your ribcage. ' +
                            'Moving in about an inch from your mid-line it moves down to your public bone. ' +
                            'It follows down the outer edge of your knee but then veers back to midline. ' +
                            'It ends at the outer side of your second toes (Stomach 45)',

        //fonts are darker than background colors
        font_color:'color:#e2b630',
        background_color:'background-color:#e2b630',

        meridian_imbalances:StomachMeridianImbalance,
        meridian_balance:StomachMeridianBalance,

        affirmation_text:'I trust in the mystery of my life',
        affirmations_list:StomachAffirmation,

        tracingText: STInstruction,

        western:StomachWesternMedicine,
        chinese: StomachChineseMedicine,

        source_pic:'assets/images/meridians/stomach/sourceST.jpg',
        source_point:'ST-42, located on the dorsum of the foot in the dip where the 2nd and 3rd metatarsal bones meet.',

        nl_pic:'assets/images/meridians/stomach/nlST.jpg',
        nl_points:'Find the frontal Stomach Neuro-Lymphatics in the arc under your left breast and at the top of your upper shoulder edges. ' +
            'Find the back Stomach NLs on either side of the top of your cervical spine and in the center of your shoulder blades near the edges.',

        nv_pic:'assets/images/meridians/stomach/nvST.jpg',
        nv_points:'Find your Stomach Neuro-Vasculars at the center of your jawline. Hold them along with your Main Neuro-Vascular points ' +
            'shown on the picture on the right.',

        acu_points_sender_strengthen: 'Stomach strenghthens Large Intestine',
        acu_points_sender_strengthen_acu:'ST-36 strengthens LI-11',

        acu_points_sender_strengthen_desc:'To strengthen Large Intestine hold LI-11, between LU-5 & lateral epicondyle of humerus, at lateral crease and ST-36 ' +
            'about 4 fingers down from Patella on the lateral side of the leg.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/stomach/acuPts-ST-STR-LI.jpg',

        acu_points_sender_sedate:'Stomach sedates Small Intestine',
        acu_points_sender_sedate_acu:'ST-36 sedates SI-8',
        acu_points_sender_sedate_desc:'To sedate Small Intestine hold SI-8, at the elbow between the tip of ulna and humerous bones, ' +
            'the funny bone spot and ST-36, 4 fingers width below the Patella on the lateral side of the Tibea.',
        acu_points_sender_sedate_pic:'assets/images/meridians/stomach/acuPts-ST-SED-SI.jpg',

        acu_points_sender_sedate2:'Stomach sedates Triple Warmer',
        acu_points_sender_sedate_acu2:'ST-36 sedates TW-10',
        acu_points_sender_sedate_desc2:'To sedate Triple Warmer hold TW-10, 1 cun superior to olecranon, in dip when flexed and ST-36,' +
            ' 4 fingers down from the knee cap on the side of the Tibea.',
        acu_points_sender_sedate_pic2:'assets/images/meridians/stomach/acuPts-ST-SED-TW.jpg',

        acu_points_sender_control:'Stomach controls Bladder',
        acu_points_sender_control_acu:'ST-36 controls BL-40',

        acu_points_sender_control_desc:'To stop the flow to Bladder hold BL-40 and ST-36',
        acu_points_sender_control_pic:'assets/images/meridians/stomach/acuPts-ST-CTR-BL.jpg',

        acu_points_receiver_strengthen: 'Small Intestine strenghthens Stomach',
        acu_points_receiver_strengthen_desc:'To strengthen Stomach hold SI-5 and ST-41.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/smallIntestine/acuPts-SI-STR-ST.jpg',

        acu_points_receiver_sedate:'Large Intestine sedates Stomach',
        acu_points_receiver_sedate_desc:'To sedate Stomach hold LI-1 and ST-45.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/largeIntestine/acuPts-LI-SED-ST.jpg',

        acu_points_receiver_control:'Gallbladder controls Stomach',
        acu_points_receiver_control_desc:'To stop the flow to Stomach hold GB-41 and ST-43',
        acu_points_receiver_control_pic:'assets/images/meridians/gallbladder/acuPts-GB-CTR-ST.jpg',
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

        meridian_icon: 'assets/images/meridians/spleen/iconSP.jpg',
        meridian_element_pic: 'assets/images/meridians/spleen/elementSP.jpg',
        meridian_attribute_pic: 'assets/images/meridians/spleen/attributeSP.jpg',
        meridian_animal_pic: 'assets/images/meridians/spleen/animalSP.jpg',

        meridian_path_pic: 'assets/images/meridians/spleen/pathSP.jpg',
        meridian_path_copy: 'Spleen starts at the outer side of each of your big toes (Spleen 1). ' +
            'It travels up the insides of each foot to the inside of each ankle bone. ' +
            'It moves up along the inner mid shin and thigh. ' +
            'It heads towards your pubic bone edges. ' +
            'It then moves out to the most prominent edge of the ribcage. ' +
            'It follows along upwards to your armpits. ' +
            'Then it move down along the side of your ribs about halfway.',

        font_color:'color:#866911',
        background_color:'background-color:#866911',

        meridian_imbalances:SpleenMeridianImbalance,
        meridian_balance:SpleenMeridianBalance,

        tracingText: SPInstruction,
        affirmation_text:'I nourish myself with love',
        affirmations_list:SpleenAffirmation,

        western:SpleenWesternMedicine,
        chinese:SpleenChineseMedicine,

        source_pic:'assets/images/meridians/spleen/sourceSP.jpg',
        source_point:'SP-3 located along the inside of the foot after the big Metaphalangeal joint.',

        nl_points:'Find your frontal Spleen Neuro-Lymphatics just under your breasts (about an inch) on both side. Find ' +
            'your back Spleen NLs along your spine next to your inner shoulder blades.',
        nl_pic:'assets/images/meridians/spleen/nlSP.jpg',

        nv_pic:'assets/images/meridians/spleen/nvSP.jpg',
        nv_points:'Spleen Neuro-Vasculars are found about 2 inches directly above your ear tips and at the rounding' +
            ' curve at the back of your head. Hold them along with your Main Neuro-Vascular points' +
            'shown on the picture on the right.',

        acu_points_sender_strengthen: 'Spleen strengthens Lung',
        acu_points_sender_strengthen_acu:'SP-3 strengthens LU-9',

        acu_points_sender_strengthen_desc:'To strengthen Lung hold LU-9, about an inch up from the wrist crease along the thumb line and SP-3, ' +
            'at the proximal edge of the bunion bump.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/spleen/acuPts-SP-STR-LU.jpg',

        acu_points_sender_sedate:'Spleen sedates Pericardium',
        acu_points_sender_sedate_acu:'SP-3 sedates PC-7',

        acu_points_sender_sedate_desc:'To sedate Pericardium hold PC-7, in the very center of the inner wrist crease and SP-3, right after' +
            ' the bunion bump along the inside of the big toe line.',
        acu_points_sender_sedate_pic:'assets/images/meridians/spleen/acuPts-SP-SED-PC.jpg',

        acu_points_sender_control:'Spleen controls Kidney',
        acu_points_sender_control_acu:'SP-3 controls KI-3',

        acu_points_sender_control_desc:' To stop the flow to Kidney hold KI-3 and SP-3',
        acu_points_sender_control_pic:'assets/images/meridians/spleen/acuPts-SP-CTR-KI.jpg',

        acu_points_receiver_strengthen:'Heart strengthens Spleen',
        acu_points_receiver_strengthen_desc:'To strengthen Spleen hold HT-8 and SP-2.',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/heart/acuPts-HT-STR-SP.jpg',

        acu_points_receiver_sedate:'Lung sedates Spleen',
        acu_points_receiver_sedate_desc:'To sedate Spleen hold LU-8 and SP-5.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/lungs/acuPts-LU-SED-SP.jpg',

        acu_points_receiver_control:'Liver controls Spleen',
        acu_points_receiver_control_desc:' To stop the flow to Spleen hold LR-1 and SP-1',
        acu_points_receiver_control_pic:'assets/images/meridians/liver/acuPts-LR-CTR-SP.jpg',
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

        meridian_icon: 'assets/images/meridians/heart/iconHT.jpg',
        meridian_element_pic: 'assets/images/meridians/heart/elementHT.jpg',
        meridian_attribute_pic: 'assets/images/meridians/heart/attributeHT.jpg',
        meridian_attribute_pic2: 'assets/images/meridians/heart/attributeHT2.jpg',
        meridian_animal_pic: 'assets/images/meridians/heart/animalHT.jpg',

        meridian_path_pic: 'assets/images/meridians/heart/pathHT.jpg',
        meridian_path_copy: 'Heart begins in the center of your armpits at Heart-1. ' +
                            'It follows down along your inner elbow on the pinky finger edge. ' +
                            'It ends at the inside edge of your pinky finger pad at Heart-9.',


        font_color:'color:#c24541',
        background_color:'background-color:#c24541',

        meridian_imbalances: HeartMeridianImbalance,
        meridian_balance:HeartMeridianBalance,

        tracingText: HTInstruction,
        affirmation_text:'I love myself deeply and completely',
        affirmations_list:HeartAffirmation,

        western:HeartWesternMedicine,
        chinese:HeartChineseMedicine,

        source_pic:'assets/images/meridians/heart/sourceHT.jpg',
        source_point:'HT-7, located on the inner wrist crease along the baby finger line.',

        nl_pic:'assets/images/meridians/heart/nlHT.jpg',
        nl_points:'Find your frontal Heart Neuro-Lymphatics just under the center of your clavicles (collarbone). Find your' +
            ' Heart NLs along the top of your shoulder blades about 3 inches from your spine and along the top of your spine ' +
            '(where you can lift your hands over your head and reach behind to reach them).',

        nv_pic:'assets/images/meridians/heart/nvHT.jpg',
        nv_points:'Heart Neuro-Vasculars are at the top of your head. Hold them along with your Main Neuro-Vascular points ' +
            'shown on the picture on the right.',

        acu_points_sender_strengthen:'Heart strengthens Spleen',
        acu_points_sender_strengthen_acu:'HT-8 strengthens SP-2',

        acu_points_sender_strengthen_desc:'To strengthen Spleen hold SP-2, just after the bunion bump on the inside of the big toe and HT-8, ' +
            'where your pinky finger lands when you make a fist.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/heart/acuPts-HT-STR-SP.jpg',

        acu_points_sender_sedate:'Heart sedates Liver',
        acu_points_sender_sedate_acu:'HT-8 sedates LR-2',

        acu_points_sender_sedate_desc:'To sedate Liver hold LR-2, right before the bunion bump in the big toe crease and HT-8 (make a fist' +
            ' and where your pinky lands, that is HT-8.',
        acu_points_sender_sedate_pic:'assets/images/meridians/heart/acuPts-HT-SED-LR.jpg',

        acu_points_sender_control:'Heart controls Lung',
        acu_points_sender_control_acu:'HT-8 controls LU-10',

        acu_points_sender_control_desc:'Hold LU-10 on the fattieset part of the thumb when you close pointer and thumb togeter. HT-8 ' +
            'is found at the pinky finger tip when you close your hand.',
        acu_points_sender_control_pic:'assets/images/meridians/heart/acuPts-HT-CTR-LU.jpg',

        acu_points_receiver_strengthen: 'Liver strengthens Heart',
        acu_points_receiver_strengthen_desc:'Hold LR-1 found at the inner edge of your big toenail and HT-9 found at the tip of your pinky finger',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/liver/acuPts-LR-STR-HT.jpg',

        acu_points_receiver_control:'Kidney controls Heart',
        acu_points_receiver_control_desc:'To stop the flow of Heart hold KI-10 found just behind your knee edge in the area between the ' +
            'two tendons. For HT-3 hold on the outer edge of your inner elbow crease.',
        acu_points_receiver_control_pic:'assets/images/meridians/kidney/acuPts-KI-CTR-HT.jpg',
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

        meridian_icon: 'assets/images/meridians/smallIntestine/iconSI.jpg',
        meridian_element_pic: 'assets/images/meridians/smallIntestine/elementSI.jpg',
        meridian_attribute_pic: 'assets/images/meridians/smallIntestine/attributeSI.jpg',
        meridian_attribute_pic2: 'assets/images/meridians/smallIntestine/attributeSI2.jpg',
        meridian_animal_pic: 'assets/images/meridians/smallIntestine/animalSI.jpg',

        meridian_path_pic: 'assets/images/meridians/smallIntestine/pathSI.jpg',
        meridian_path_copy: 'Small Intestine starts on the outer side of your hand at baby finger (Small Intestine 1). ' +
            'It follows up your arm towards your outer wrist, moving over the protruding wrist bone. ' +
            'It moves along the outer edge of your arm past to funny bone to your middle outer shoulder.' +
            'It juts slightly towards your back shoulder and then arrives at the side of your neck. ' +
            'It moves along the sides of your nect to arrive under your cheekbones. ' +
            'It finishes up across your cheek at the edge of your ears (Small Intestine 19).',

        font_color:'color:#e8abaa',
        background_color:'background-color:#e8abaa',

        meridian_imbalances: SmallIntestineMeridianImbalance,
        meridian_balance:SmallIntestineMeridianBalance,

        tracingText: SIInstruction,
        affirmation_text:'I know what I want in life, I am decisive',
        affirmations_list:SmallIntestineAffirmation,

        western:SmallIntestineWesternMedicine,
        chinese:SmallIntestineChineseMedicine,

        source_pic:'assets/images/meridians/smallIntestine/sourceSI.jpg',
        source_point:'SI-4 is located at the wrist crease right before the Triquetral bone.',

        nl_pic:'assets/images/meridians/smallIntestine/nlSI.jpg',
        nl_points:'Find the frontal Small Intestine Neuro-Lymphatics in the upside down U shape your ribs ' +
            'make and along your inner thighs. Find your back Small Intesting NLS along your center spine ' +
            'at the location you can reach when reaching your hands behind your back.',

        nv_pic:'assets/images/meridians/smallIntestine/nvSI.jpg ',
        nv_points:'Small Intestine Neuro-Vasculars at the side of your head (feel for the arterial pulse there.' +
            ' Hold them along with your Main Neuro-Vascular points shown on the picture on the right.',

        acu_points_sender_strengthen: 'Small Intestine strengthens Stomach',
        acu_points_sender_strengthen_acu:'SI-5 strengthens ST-41',

        acu_points_sender_strengthen_desc:'To strengthen Stomach hold ST-41, on dorsum, at middle of transverse crease of ankle joint and SI-5, ' +
            'just after Triquetral bone, before ulna head - at crease.',
        acu_points_sender_strengthen_pic:'assets/images/meridians/smallIntestine/acuPts-SI-STR-ST.jpg',

        acu_points_sender_sedate:'Small Intestine sedates Gallbladder',
        acu_points_sender_sedate_acu:'SI-5 sedates GB-38',

        acu_points_sender_sedate_desc:'To sedate Gallbladder hold GB-38, 4 cun superior to LM prominence, anterior border of fibula, ' +
            'and SI-5, just after Triquetral bone, before ulna head - at crease.',
        acu_points_sender_sedate_pic:'assets/images/meridians/smallIntestine/acuPts-SI-SED-GB.jpg',

        acu_points_sender_control:'Small Intestine controls Large Intestine',
        acu_points_sender_control_acu:'SI-5 controls LI-5',

        acu_points_sender_control_desc:'To stop the flow to Large Intestine hold LI-5 and SI-5',
        acu_points_sender_control_pic:'assets/images/meridians/smallIntestine/acuPts-SI-CTR-LI.jpg',

        acu_points_receiver_strengthen: 'Gallbladder strengthens Small Intestine',
        acu_points_receiver_strengthen_desc:'To strengthen Small Intestine hold GB-41  and SI-3',
        acu_points_receiver_strengthen_pic:'assets/images/meridians/gallbladder/acuPts-GB-STR-SI.jpg',

        acu_points_receiver_sedate:'Stomach sedates Small Intestine',
        acu_points_receiver_sedate_desc:'To sedate Small Intestine hold ST-36 and SI-8.',
        acu_points_receiver_sedate_pic:'assets/images/meridians/stomach/acuPts-ST-SED-SI.jpg',

        acu_points_receiver_control:'Bladder stops the flow of Small Intestine',
        acu_points_receiver_control_desc:'To stop the flow to Small Intestine hold SI-2 and BL-66',
        acu_points_receiver_control_pic:'assets/images/meridians/bladder/acuPts-BL-CTR-SI.jpg',


    },

    {id: 13,
        name: 'Central',
        short:'The Sea of the Yin Meridians',
        yin_yang:'yin',

        font_color:'color:#F2D0AD',
        background_color:'background-color:#F2D0AD',

        meridian_imbalances:CentralMeridianImbalance,
        meridian_balance:CentralMeridianBalance,

        chinese: CentralChineseMedicine,
        western: CentralWesternMedicine,

        affirmation_text:'I center myself in Spirit',
        tracingText: CTInstruction,

        nl_points:'',
        nl_pic:'assets/images/neuroLymphatics/neuroLymphaticsCT.jpg',
        meridian_element_pic: 'assets/images/elements/central.jpg',
        cen_gov_icon: 'assets/images/elements/noElement.png'
    },

    {id: 14,
        name: 'Governing',
        short:'The Sea of the Yang Meridians',
        yin_yang:'yang',

        font_color:'color:#F2D0AD',
        background_color:'background-color:#F2D0AD',

        meridian_imbalances:GoverningMeridianImbalance,
        meridian_balance: GoverningMeridianBalance,

        affirmation_text:'I ground myself in gratitude',
        tracingText: GVInstruction,

        chinese: GoverningChineseMedicine,
        western: GoverningWesternMedicine,

        nl_points:'',
        nl_pic:'assets/images/neuroLymphatics/neuroLymphaticsGV.jpg',
        meridian_element_pic: 'assets/images/elements/governing.jpg',
        cen_gov_icon: 'assets/images/meridians/noElement.png'
    },

];

