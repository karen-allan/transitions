import {Subject} from './subject';

export const SUBJECTS: Subject[] = [
    /* HOME */
    {id: 10, title: 'Energy Medicine Support', picture:'assets/images/home/gridEnergySessions.jpg', url:'/supportSessions'},
    {id: 11, title: 'End of Life Doula Care', picture:'assets/images/home/gridEndOfLifeDoula.jpg', url:'/supportEOLCare'},

    /* ON MAIN ABOUT PAGE */
    {id: 21, title: 'My Energy Medicine Journey', picture:'assets/images/about/gridEnergyMedicine.jpg', url:'/aboutEnergyMedicine'},
    {id: 22, title: 'On Becoming an End of Life Doula', picture:'assets/images/about/gridDoulaCare.jpg', url:'/aboutEndOfLifeDoula'},

    {id: 23, title: 'My Meandering Path', picture:'assets/images/about/gridAllCare.jpg', url: '/aboutPath'},
    /* ON ABOUT ENERGY MEDICINE PAGE */
    {id: 24, title: 'On Becoming an End of Life Doula', picture:'assets/images/about/gridDoulaCare.jpg', url:'/aboutEndOfLifeDoula'},

    {id: 25, title: 'My Meandering Path', picture:'assets/images/about/gridAllCare.jpg', url: '/aboutPath'},
    /* ON ABOUT DOULA PAGE */
    {id: 26, title: 'My Energy Medicine Journey', picture:'assets/images/about/gridEnergyMedicine.jpg', url:'/aboutEnergyMedicine'},

    /* SUPPORT */
    {id: 31, title: 'Energy Medicine Sessions', picture:'assets/images/support/gridEnergySessions.jpg', url:'/supportSessions'},
    {id: 32, title: 'End of Life Doula Care', picture:'assets/images/support/gridEndOfLifeDoula.jpg', url:'/supportEOLCare'},

    /* SUPPORT - DOULA CARE */
    {id: 311, title: 'Choosing Your Representatives', picture:'assets/images/support/eolDoula/grids/choosingAdvocate.jpg',url:'/eolTopicRepresentatives'},
    {id: 312, title: 'Advocating for Yourself', picture:'assets/images/support/eolDoula/grids/advocateForSelf.jpg', url:'/eolTopicAdvocate'},
    {id: 313, title: 'Doula Care at the Bedside', picture:'assets/images/support/eolDoula/grids/patientSupport.jpg', url:'/eolTopicPatientCare'},
    {id: 314, title: 'Supporting the Care Givers', picture:'assets/images/support/eolDoula/grids/caregiverSupport.jpg', url:'/eolTopicCaregiverCare'},
    {id: 315, title: 'Leaving a Legacy', picture:'assets/images/support/eolDoula/grids/legacy.jpg', url:'/eolTopicLegacy'},
    {id: 316, title: 'Ceremony Options', picture:'assets/images/support/eolDoula/grids/ceremony.jpg', url:'/eolTopicCeremony'},

    /* SUPPORT - ENERGY CARE */
    {id: 321, title: 'Help with Anxiety', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyHelpAnxiety'},
    {id: 322, title: 'Help for Burnout', picture:'assets/images/support/energyMedicine/gridHelpBurnout.jpg',url:'/energyHelpBurnout'},
    {id: 323, title: 'Decrease your Pain', picture:'assets/images/support/energyMedicine/gridHelpPain.jpg', url:'/energyHelpPain'},
    {id: 324, title: 'Move Your Energy', picture:'assets/images/support/energyMedicine/gridMoveEnergy.jpg',url:'/energyMoveEnergy'},
    {id: 325, title: 'Discover Your Element', picture:'assets/images/support/energyMedicine/gridKnowElement.jpg', url:'/energyDiscoverElement'},
    {id: 326, title: 'Understanding Meridians', picture:'assets/images/support/energyMedicine/gridKnowMeridians.jpg', url:'/energyKnowMeridians'},

    /* DOULA - REPRESENTATIVE */
    {id: 3000, title: 'Planning Ahead', picture:'assets/images/support/eolDoula/grids/planningAhead.jpg', url:'/eolDoulaHelp'},
    /* ON CHOOSE A REP PAGE */
    {id: 3001, title: 'Advocating for Yourself', picture:'assets/images/support/eolDoula/grids/advocateForSelf.jpg', url:'/eolTopicAdvocate'},
    {id: 3002, title: 'Doula Care at the Bedside', picture:'assets/images/support/eolDoula/grids/patientSupport.jpg', url:'/eolTopicPatientCare'},
    {id: 3003, title: 'Supporting the Care Givers', picture:'assets/images/support/eolDoula/grids/caregiverSupport.jpg', url:'/eolTopicCaregiverCare'},
    {id: 3004, title: 'Leaving a Legacy', picture:'assets/images/support/eolDoula/grids/legacy.jpg', url:'/eolTopicLegacy'},
    {id: 3005, title: 'Ceremony Options', picture:'assets/images/support/eolDoula/grids/ceremony.jpg', url:'/eolTopicCeremony'},

    /* DOULA - ADVOCATE */
    {id: 3010, title: 'Planning Ahead', picture:'assets/images/support/eolDoula/grids/planningAhead.jpg', url:'/eolDoulaHelp'},
    {id: 3011, title: 'Choosing Your Representatives', picture:'assets/images/support/eolDoula/grids/choosingAdvocate.jpg',url:'/eolTopicRepresentatives'},
    /* ON ADVOCATE ADV CARE PAGE  */
    {id: 3012, title: 'Doula Care at the Bedside', picture:'assets/images/support/eolDoula/grids/patientSupport.jpg', url:'/eolTopicPatientCare'},
    {id: 3013, title: 'Supporting the Care Givers', picture:'assets/images/support/eolDoula/grids/caregiverSupport.jpg', url:'/eolTopicCaregiverCare'},
    {id: 3014, title: 'Leaving a Legacy', picture:'assets/images/support/eolDoula/grids/legacy.jpg', url:'/eolTopicLegacy'},
    {id: 3015, title: 'Ceremony Options', picture:'assets/images/support/eolDoula/grids/ceremony.jpg', url:'/eolTopicCeremony'},

    /* DOULA - FOR PATIENT CARE  */
    {id: 3020, title: 'Planning Ahead', picture:'assets/images/support/eolDoula/grids/planningAhead.jpg', url:'/eolDoulaHelp'},
    {id: 3021, title: 'Choosing Your Representatives', picture:'assets/images/support/eolDoula/grids/choosingAdvocate.jpg',url:'/eolTopicRepresentatives'},
    {id: 3022, title: 'Advocating for Yourself', picture:'assets/images/support/eolDoula/grids/advocateForSelf.jpg', url:'/eolTopicAdvocate'},
    /* ON PATIENT CARE PAGE */
    {id: 3023, title: 'Supporting the Care Givers', picture:'assets/images/support/eolDoula/grids/caregiverSupport.jpg', url:'/eolTopicCaregiverCare'},
    {id: 3024, title: 'Leaving a Legacy', picture:'assets/images/support/eolDoula/grids/legacy.jpg', url:'/eolTopicLegacy'},
    {id: 3025, title: 'Ceremony Options', picture:'assets/images/support/eolDoula/grids/ceremony.jpg', url:'/eolTopicCeremony'},

    /* DOULA - FOR CAREGIVER CARE  */
    {id: 3030, title: 'Planning Ahead', picture:'assets/images/support/eolDoula/grids/planningAhead.jpg', url:'/eolDoulaHelp'},
    {id: 3031, title: 'Choosing Your Representatives', picture:'assets/images/support/eolDoula/grids/choosingAdvocate.jpg',url:'/eolTopicRepresentatives'},
    {id: 3032, title: 'Advocating for Yourself', picture:'assets/images/support/eolDoula/grids/advocateForSelf.jpg', url:'/eolTopicAdvocate'},
    {id: 3033, title: 'Doula Care at the Bedside', picture:'assets/images/support/eolDoula/grids/patientSupport.jpg', url:'/eolTopicPatientCare'},
    /* ON CAREGIVER CARE PAGE */
    {id: 3034, title: 'Leaving a Legacy', picture:'assets/images/support/eolDoula/grids/legacy.jpg', url:'/eolTopicLegacy'},
    {id: 3035, title: 'Ceremony Options', picture:'assets/images/support/eolDoula/grids/ceremony.jpg', url:'/eolTopicCeremony'},

    /* DOULA - LEGACY  */
    {id: 3040, title: 'Planning Ahead', picture:'assets/images/support/eolDoula/grids/planningAhead.jpg', url:'/eolDoulaHelp'},
    {id: 3041, title: 'Choosing Your Representatives', picture:'assets/images/support/eolDoula/grids/choosingAdvocate.jpg',url:'/eolTopicRepresentatives'},
    {id: 3042, title: 'Advocating for Yourself', picture:'assets/images/support/eolDoula/grids/advocateForSelf.jpg', url:'/eolTopicAdvocate'},
    {id: 3043, title: 'Doula Care at the Bedside', picture:'assets/images/support/eolDoula/grids/patientSupport.jpg', url:'/eolTopicPatientCare'},
    {id: 3044, title: 'Supporting the Care Givers', picture:'assets/images/support/eolDoula/grids/caregiverSupport.jpg', url:'/eolTopicCaregiverCare'},
    /* ON LEGACY PAGE */
    {id: 3045, title: 'Ceremony Options', picture:'assets/images/support/eolDoula/grids/ceremony.jpg', url:'/eolTopicCeremony'},

    /* DOULA - CEREMONY  */
    {id: 3050, title: 'Planning Ahead', picture:'assets/images/support/eolDoula/grids/planningAhead.jpg', url:'/eolDoulaHelp'},
    {id: 3051, title: 'Choosing Your Representatives', picture:'assets/images/support/eolDoula/grids/choosingAdvocate.jpg',url:'/eolTopicRepresentatives'},
    {id: 3052, title: 'Advocating for Yourself', picture:'assets/images/support/eolDoula/grids/advocateForSelf.jpg', url:'/eolTopicAdvocate'},
    {id: 3053, title: 'Doula Care at the Bedside', picture:'assets/images/support/eolDoula/grids/patientSupport.jpg', url:'/eolTopicPatientCare'},
    {id: 3054, title: 'Supporting the Care Givers', picture:'assets/images/support/eolDoula/grids/caregiverSupport.jpg', url:'/eolTopicCaregiverCare'},
    /* ON CEREMONY PAGE */
    {id: 3055, title: 'Leaving a Legacy', picture:'assets/images/support/eolDoula/grids/legacy.jpg', url:'/eolTopicLegacy'},

    /* ENERGY CARE - ANXIETY */
    {id: 3060, title: 'Energy Help for All', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyMedicineHelp'},
    /* ON ANXIETY PAGE */
    {id: 3061, title: 'Help for Burnout', picture:'assets/images/support/energyMedicine/gridHelpBurnout.jpg',url:'/energyHelpBurnout'},
    {id: 3062, title: 'Decrease your Pain', picture:'assets/images/support/energyMedicine/gridHelpPain.jpg', url:'/energyHelpPain'},
    {id: 3063, title: 'Move Your Energy', picture:'assets/images/support/energyMedicine/gridMoveEnergy.jpg',url:'/energyMoveEnergy'},
    {id: 3064, title: 'Discover Your Element', picture:'assets/images/support/energyMedicine/gridKnowElement.jpg', url:'/energyDiscoverElement'},
    {id: 3065, title: 'Understanding Meridians', picture:'assets/images/support/energyMedicine/gridKnowMeridians.jpg', url:'/energyKnowMeridians'},

    /* ENERGY CARE - BURNOUT */
    {id: 3070, title: 'Energy Help for All', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyMedicineHelp'},
    {id: 3071, title: 'Help with Anxiety', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyHelpAnxiety'},
    /* ON BURNOUT PAGE */
    {id: 3072, title: 'Decrease your Pain', picture:'assets/images/support/energyMedicine/gridHelpPain.jpg', url:'/energyHelpPain'},
    {id: 3073, title: 'Move Your Energy', picture:'assets/images/support/energyMedicine/gridMoveEnergy.jpg',url:'/energyMoveEnergy'},
    {id: 3074, title: 'Discover Your Element', picture:'assets/images/support/energyMedicine/gridKnowElement.jpg', url:'/energyDiscoverElement'},
    {id: 3075, title: 'Understanding Meridians', picture:'assets/images/support/energyMedicine/gridKnowMeridians.jpg', url:'/energyKnowMeridians'},

    /* ENERGY CARE - PAIN */
    {id: 3080, title: 'Energy Help for All', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyMedicineHelp'},
    {id: 3081, title: 'Help with Anxiety', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyHelpAnxiety'},
    {id: 3082, title: 'Help for Burnout', picture:'assets/images/support/energyMedicine/gridHelpBurnout.jpg',url:'/energyHelpBurnout'},
    /* ON PAIN PAGE */
    {id: 3083, title: 'Move Your Energy', picture:'assets/images/support/energyMedicine/gridMoveEnergy.jpg',url:'/energyMoveEnergy'},
    {id: 3084, title: 'Discover Your Element', picture:'assets/images/support/energyMedicine/gridKnowElement.jpg', url:'/energyDiscoverElement'},
    {id: 3085, title: 'Understanding Meridians', picture:'assets/images/support/energyMedicine/gridKnowMeridians.jpg', url:'/energyKnowMeridians'},

    /* ENERGY CARE - MOVE */
    {id: 3090, title: 'Energy Help for All', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyMedicineHelp'},
    {id: 3091, title: 'Help with Anxiety', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyHelpAnxiety'},
    {id: 3092, title: 'Help for Burnout', picture:'assets/images/support/energyMedicine/gridHelpBurnout.jpg',url:'/energyHelpBurnout'},
    {id: 3093, title: 'Decrease your Pain', picture:'assets/images/support/energyMedicine/gridHelpPain.jpg', url:'/energyHelpPain'},
    /* ON MOVE PAGE */
    {id: 3094, title: 'Discover Your Element', picture:'assets/images/support/energyMedicine/gridKnowElement.jpg', url:'/energyDiscoverElement'},
    {id: 3095, title: 'Understanding Meridians', picture:'assets/images/support/energyMedicine/gridKnowMeridians.jpg', url:'/energyKnowMeridians'},

    /* ENERGY CARE - ELEMENTS */
    {id: 3100, title: 'Energy Help for All', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyMedicineHelp'},
    {id: 3101, title: 'Help with Anxiety', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyHelpAnxiety'},
    {id: 3102, title: 'Help for Burnout', picture:'assets/images/support/energyMedicine/gridHelpBurnout.jpg',url:'/energyHelpBurnout'},
    {id: 3103, title: 'Decrease your Pain', picture:'assets/images/support/energyMedicine/gridHelpPain.jpg', url:'/energyHelpPain'},
    {id: 3104, title: 'Move Your Energy', picture:'assets/images/support/energyMedicine/gridMoveEnergy.jpg',url:'/energyMoveEnergy'},
    /* ON ELEMENT PAG# */
    {id: 3105, title: 'Understanding Meridians', picture:'assets/images/support/energyMedicine/gridKnowMeridians.jpg', url:'/energyKnowMeridians'},

    /* ENERGY CARE - MERIDIANS */
    {id: 3110, title: 'Energy Help for All', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyMedicineHelp'},
    {id: 3111, title: 'Help with Anxiety', picture:'assets/images/support/energyMedicine/gridHelpAnxiety.jpg', url:'/energyHelpAnxiety'},
    {id: 3112, title: 'Help for Burnout', picture:'assets/images/support/energyMedicine/gridHelpBurnout.jpg',url:'/energyHelpBurnout'},
    {id: 3113, title: 'Decrease your Pain', picture:'assets/images/support/energyMedicine/gridHelpPain.jpg', url:'/energyHelpPain'},
    {id: 3114, title: 'Move Your Energy', picture:'assets/images/support/energyMedicine/gridMoveEnergy.jpg',url:'/energyMoveEnergy'},
    {id: 3115, title: 'Discover Your Element', picture:'assets/images/support/energyMedicine/gridKnowElement.jpg', url:'/energyDiscoverElement'},
    /* ON MERIDIAN PAGE */

    /* ON MAIN BOOK PAGE */
    // {id: 40, title: 'My Energy Medicine Journey', picture:'assets/images/about/gridEnergyMedicine.jpg', url:'/aboutEnergyMedicine'},
    {id: 41, title: 'Book a Consultation', picture:'assets/images/book/gridConsult.jpg', url:'/bookEOLConsult'},
    {id: 42, title: 'Book a Session', picture:'assets/images/book/gridSession.jpg', url:'/bookEnergySessions'},

    /* ON CONSULT BOOK PAGE */
    {id: 43, title: 'Info Overview', picture:'assets/images/book/gridInfo.jpg', url:'/bookAll'},
    {id: 44, title: 'Book a Session', picture:'assets/images/book/gridSession.jpg', url:'/bookEnergySessions'},

    /* ON SESSION BOOK PAGE */
    {id: 45, title: 'Info Overview', picture:'assets/images/book/gridInfo.jpg', url:'/bookAll'},
    {id: 46, title: 'Book a Consultation', picture:'assets/images/book/gridConsult.jpg', url:'/bookEOLConsult'},
]
