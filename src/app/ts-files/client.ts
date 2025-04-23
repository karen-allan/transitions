export class Client {

    constructor(
        /* demographics */
        public id: number,
        public name: string,
        public cellPhone: string,
        public email: string,
        public address: string,
        public city: string,
        public provState: string,
        public pc: string,

        public birthdate: string,
        public occupation: string,
        public referredBy: string,

        public emergName: string,
        public emergRelation: string,
        public emergPhone: string,

        /* medical */
        public medsSupplements: string,
        public heartDisease: boolean,
        public cancer: boolean,
        public stroke: boolean,
        public highBloodPressure: boolean,
        public diabetes: boolean,
        public mentalIllness: boolean,
        public seizures: boolean,
        public autoImmuneDisease: boolean,
        public none: boolean,
        public illnessDetails: string,

        /* end of life planning */
        public eolFrailty: string,

        public eolPlanFocus0: boolean,
        public eolPlanFocus1: boolean,
        public eolPlanFocus2: boolean,
        public eolPlanFocus3: boolean,
        public eolPlanFocus4: boolean,
        public eolPlanFocus5: boolean,
        public eolPlanFocus6: boolean,
        public eolPlanFocus7: boolean,
        public eolPlanFocus8: boolean,
        public eolPlanFocus9: boolean,
        public eolPlanDetails: string,

        /* patient consult */
        public eolPatientFocus0: boolean,
        public eolPatientFocus1: boolean,
        public eolPatientFocus2: boolean,
        public eolPatientFocus3: boolean,
        public eolPatientFocus4: boolean,
        public eolPatientFocus5: boolean,
        public eolPatientFocus6: boolean,
        public eolPatientFocus7: boolean,
        public eolPatientFocus8: boolean,
        public eolPatientFocus9: boolean,
        public eolPatientFocus10: boolean,
        public eolPatientFocus11: boolean,
        public eolPatientDetails: string,

        /* caregiver consult */
        public eolCaregiverFocus0: boolean,
        public eolCaregiverFocus1: boolean,
        public eolCaregiverFocus2: boolean,
        public eolCaregiverFocus3: boolean,
        public eolCaregiverFocus4: boolean,
        public eolCaregiverFocus5: boolean,
        public eolCaregiverFocus6: boolean,
        public eolCaregiverFocus7: boolean,
        public eolCaregiverFocus8: boolean,
        public eolCaregiverFocus9: boolean,
        public eolCaregiverDetails: string,

        public defaultDate?: string,    ) {
    }

}
