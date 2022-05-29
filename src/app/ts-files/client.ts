export class Client {

    constructor(
        /* demographics */
        public id: number,
        public name: string,
        public cellPhone:string,
        public email:string,
        public address:string,
        public city:string,
        public provState:string,
        public pc:string,
        public country:string,
        public birthdate: string,
        public occupation:string,
        public referredBy:string,
        public emergName:string,
        public emergRelation:string,
        public emergPhone:string,

        /* medical */
        public medsSupplements:string,
        public heartDisease:boolean,
        public cancer:boolean,
        public stroke:boolean,
        public highBloodPressure:boolean,
        public diabetes:boolean,
        public mentalIllness:boolean,
        public seizures:boolean,
        public autoImmuneDisease:boolean,
        public otherDisease:boolean,
        public illnessDetails:string,

        /* energy medicine session */
        /* session-goals */
        public sessionEnergyKnowledge:string,
        public sessionBenefits:string,
        public sessionAltTreatments:string,

        /* session-considerations */
        public sessionPaceMaker:boolean,
        public sessionHearingAids:boolean,
        public sessionAromatherapy:boolean,
        public sessionPainfulJoints:boolean,

        /* end of life planning */
        public eolFrailty:string,
        public eolPlanFocus1:boolean,
        public eolPlanFocus2:boolean,
        public eolPlanFocus3:boolean,
        public eolPlanFocus4:boolean,
        public eolPlanFocus5:boolean,
        public eolPlanFocus6:boolean,
        public eolPlanFocus7:boolean,
        public eolPlanFocus8:boolean,

        public eolPlanDetails:string,

        /* end of life patient care */
        public eolPatientFocus1:boolean,
        public eolPatientFocus2:boolean,
        public eolPatientFocus3:boolean,
        public eolPatientFocus4:boolean,
        public eolPatientFocus5:boolean,
        public eolPatientFocus6:boolean,
        public eolPatientFocus7:boolean,
        public eolPatientFocus8:boolean,
        public eolPatientFocus9:boolean,
        public eolPatientFocus10:boolean,
        public eolPatientFocus11:boolean,
        public eolPatientFocus12:boolean,

        public eolPatientDetails:string,

        /* end of life caregiver care */
        public eolCaregiverFocus1:boolean,
        public eolCaregiverFocus2:boolean,
        public eolCaregiverFocus3:boolean,
        public eolCaregiverFocus4:boolean,
        public eolCaregiverFocus5:boolean,
        public eolCaregiverFocus6:boolean,
        public eolCaregiverFocus7:boolean,
        public eolCaregiverFocus8:boolean,
        public eolCaregiverFocus9:boolean,
        public eolCaregiverFocus10:boolean,

        public eolCaregiverDetails:string,

        public defaultDate:string)
    {}

}
