export class Client {

    constructor(
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

        public heartDisease:boolean,
        public cancer:boolean,
        public stroke:boolean,
        public highBloodPressure:boolean,
        public diabetes:boolean,
        public mentalIllness:boolean,
        public seizures:boolean,
        public autoImmuneDisease:boolean,

        public other:boolean,
        public conditions:string,
        public knowledgeLevel:string,

        public paceMaker:boolean,
        public hearingAids:boolean,
        public aromatherapy:boolean,

        public mainBenefit:string,
        public mainIssues:string,

        public mainTreatments:string,

        public primaryFocus:string,
        public medicalHistory:string,
        public treatments:string,
        public frailty:boolean)
    {}

}
