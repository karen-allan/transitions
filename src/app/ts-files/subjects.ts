import {Subject} from './subject';

export const SUBJECTS: Subject[] = [
    /* MAINS */
   /* {id: 1, title: 'At Home', heading: 'Home Page', picture:'assets/images/lists/homeMenuAboutEnergy.jpg',url:'/home'},
    {id: 2, title: 'About My Services', heading: 'About my Journey', picture:'assets/images/lists/aboutMenuAboutMe.jpg', url:'/about'},
    {id: 3, title: 'Help your Self', heading: 'Learn Self Help', picture:'assets/images/discover/discoverMenuLearn.jpg',url:'/help'},
    {id: 4, title: 'Discover Energy', heading: 'Discover Energy Medicine',picture:'assets/images/discover/discoverMenuBook.jpg', url:'/discover'},
    {id: 5, title: 'About Sessions', heading: 'Try a Session',picture:'assets/images/discover/discoverMenuBook.jpg', url:'/sessions'},*/

    /* HOME */
    {id: 100, title: 'Help your Self', heading: 'Learn Self Help', picture:'assets/images/lists/homeMenuLearn.jpg',url:'/help'},
    {id: 101, title: 'Discover Energy', heading: 'Discover Energy Medicine', picture:'assets/images/lists/homeMenuDiscover.jpg', url:'/discover'},
    {id: 102, title: 'Session Information', heading: 'Session Info', picture:'assets/images/lists/homeMenuBook.jpg', url:'/sessions'},
    {id: 103, title: 'About My Services', heading: 'About My Services', picture:'assets/images/lists/homeMenuAboutMe.jpg', url:'/about'},

    /* ABOUT */
    {id: 200, title: 'My Energy Medicine Journey', heading: 'How I became a practitioner',picture:'assets/images/lists/aboutMenuEnergyMedicine.jpg', url:'/aboutEnergyMedicine'},
    {id: 201, title: 'Becoming an End of Life Doula', heading: 'How I became an end of life doula', picture:'assets/images/lists/aboutMenuEndOfLifeDoula.jpg',url:'/aboutEndOfLifeDoula'},

    /* HELP YOURSELF */
    {id: 300, title: 'Help with Anxiety', heading: 'Reduce your Anxiety',picture:'assets/images/lists/learnMenuHelpAnxiety.jpg', url:'/helpAnxiety'},
    {id: 301, title: 'Help for Burnout', heading: 'Help for Adrenals', picture:'assets/images/lists/learnMenuHelpBurnout.jpg',url:'/helpBurnout'},
    {id: 302, title: 'Ward off a Cold', heading: 'Ward off a Cold',picture:'assets/images/lists/learnMenuHelpColds.jpg', url:'/helpColds'},

    {id: 303, title: 'Care for your Teeth', heading: 'Help your Teeth', picture:'assets/images/lists/learnMenuHelpDental.jpg', url:'/helpDental'},
    {id: 304, title: 'Help your Digestion', heading: 'Help for GI',picture:'assets/images/lists/learnMenuHelpDigestion.jpg', url:'/helpDigestion'},
    {id: 305, title: 'Help with Fertility', heading: 'Prepare your Body', picture:'assets/images/lists/learnMenuHelpFertility.jpg',url:'/helpFertility'},

    {id: 306, title: 'Relieve Headaches', heading: 'Help Relieve a Headache', picture:'assets/images/lists/learnMenuHelpHeadaches.jpg', url:'/helpHeadaches'},
    {id: 307, title: 'Reduce Jet Lag', heading: 'Help for Jet Lag',picture:'assets/images/lists/learnMenuHelpJetLag.jpg', url:'/helpJetLag'},
    {id: 308, title: 'Help for Menopause', heading: 'Help for Menopausal Symptoms',picture:'assets/images/lists/learnMenuHelpMenopause.jpg', url:'/helpMenopause'},

    {id: 309, title: 'Reduce your Pain', heading: 'Reduce your Pain', picture:'assets/images/lists/learnMenuHelpPain.jpg',url:'/helpPain'},
    {id: 310, title: 'Protect Yourself', heading: 'Protect Yourself', picture:'assets/images/lists/learnMenuHelpProtectSelf.jpg',url:'/helpProtectSelf'},
    {id: 311, title: 'Improve your Vision', heading: 'Help with Vision',picture:'assets/images/lists/learnMenuHelpVision.jpg', url:'/helpVision'},

    /* DISCOVER */
    {id: 400, title: 'Vital Energy Moves', heading: 'Energy Medicine Exercises',picture:'assets/images/lists/discoverMenuDER.jpg', url:'/discoverDER'},
    {id: 401, title: 'Find your Rhythm', heading: 'Find your Rhythm', picture:'assets/images/lists/discoverMenuElements.jpg',url:'/discoverElements'},
    {id: 402, title: 'Balance your Meridians', heading: 'Balance your Meridians', picture:'assets/images/lists/discoverMenuMeridians.jpg',url:'/discoverMeridians'},
    {id: 403, title: 'The Meridian Cycle', heading: 'Cycle your Meridians',picture:'assets/images/lists/discoverMenuCycle.jpg', url:'/discoverCycle'},

    /* ELEMENT DETAILS */
    {id: 4010, title: 'Attributes of ', heading: 'Element Attributes', picture:'assets/images/lists/elementMenuAttributes.jpg', url:'/elementAttributes'},
    {id: 4011, title: 'Balances/Imbalances of ', heading: 'Unbalanced Symptoms',picture:'assets/images/lists/elementMenuState.jpg', url:'/elementState'},
    {id: 4012, title: 'Corrections for ', heading: 'Corrections',picture:'assets/images/lists/elementMenuCorrections.jpg', url:'/elementCorrections'},

    /* ELEMENT ATTRIBUTE  */
    {id: 40100, title: 'Balances/Imbalances of ', heading: 'Unbalanced Symptoms',picture:'assets/images/lists/elementMenuState.jpg', url:'/elementState'},
    {id: 40101, title: 'Corrections for ', heading: 'Corrections',picture:'assets/images/lists/elementMenuCorrections.jpg', url:'/elementCorrections'},

     // ELEMENT STATES
    {id: 40110, title: 'Attributes of ', heading: 'Attributes', picture:'assets/images/lists/elementMenuAttributes.jpg', url:'/elementAttributes'},
    {id: 40111, title: 'Corrections for ', heading: 'Corrections',picture:'assets/images/lists/elementMenuCorrections.jpg', url:'/elementCorrections'},

     // ELEMENT CORRECTIONS
    {id: 40120, title: 'Attributes of  ', heading: 'Attributes', picture:'assets/images/lists/elementMenuAttributes.jpg', url:'/elementAttributes'},
    {id: 40121, title: 'Balances/Imbalances of ', heading: 'Unbalanced Symptoms', picture:'assets/images/lists/elementMenuState.jpg', url:'/elementState'},

    /* MERIDIAN DETAILS */
    {id: 4020, title: 'Attributes of ', heading: 'Meridian Attributes',picture:'assets/images/lists/meridianMenuAttributes.jpg', url:'/meridianAttributes'},
    {id: 4021, title: 'Balances/Imbalances of', heading: 'Meridian Imbalances', picture:'assets/images/lists/meridianMenuState.jpg', url:'/meridianState'},
    {id: 4022, title: 'Corrections for', heading: 'Meridian Corrections',picture:'assets/images/lists/meridianMenuCorrections.jpg', url:'/meridianCorrections'},

    /* MERIDIAN ATTRIBUTE  */
    {id: 40200, title: 'Balances/Imbalances of ', heading: 'Unbalanced Symptoms',picture:'assets/images/lists/elementMenuState.jpg', url:'/meridianState'},
    {id: 40201, title: 'Corrections for ', heading: 'Corrections',picture:'assets/images/lists/elementMenuCorrections.jpg', url:'/meridianCorrections'},

    // MERIDIAN STATES
    {id: 40210, title: 'Attributes of ', heading: 'Attributes', picture:'assets/images/lists/elementMenuAttributes.jpg', url:'/meridianAttributes'},
    {id: 40211, title: 'Corrections for ', heading: 'Corrections',picture:'assets/images/lists/elementMenuCorrections.jpg', url:'/meridianCorrections'},

    // MERIDIAN CORRECTIONS
    {id: 40220, title: 'Attributes of  ', heading: 'Attributes', picture:'assets/images/lists/elementMenuAttributes.jpg', url:'/meridianAttributes'},
    {id: 40221, title: 'Balances/Imbalances of ', heading: 'Unbalanced Symptoms', picture:'assets/images/lists/elementMenuState.jpg', url:'/meridianState'},

    /* SESSIONS */
    {id: 500, title: 'My Training', heading: 'My Credentials', picture:'assets/images/lists/sessionsMenuCredentials.jpg', url:'/sessionCredentials'},
    {id: 501, title: 'Session Information', heading: 'Session Info',picture:'assets/images/lists/sessionsMenuInfo.jpg', url:'/sessionInfo'},
    {id: 502, title: 'End of Life Care', heading: 'Doula Care',picture:'assets/images/lists/sessionsMenuEndOfLifeCare.jpg', url:'/sessionDoula'},
    {id: 503, title: 'FAQs', heading: 'Frequently Asked Questions',picture:'assets/images/lists/sessionsMenuFAQs.jpg', url:'/sessionFaqs'},

]
