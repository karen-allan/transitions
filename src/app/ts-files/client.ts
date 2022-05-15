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
        public eolPlanFocus:string,
        public eolPlanDetails:string,

        /* end of life patient care */
        public eolPatientFocus:string,
        public eolPatientDetails:string,

        /* end of life caregiver care */
        public eolCaregiverFocus:string,
        public eolCaregiverDetails:string,

        public defaultDate:string)
    {}

}
