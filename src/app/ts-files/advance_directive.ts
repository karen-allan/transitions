export class AdvanceDirective {

    constructor(
        public client_name: string,
        public client_address:string,
        public client_city:string,
        public client_postal:string,
        public global_province: 'B.C.',
        public client_dob:string,
        public client_phn:string,
        public client_organ_donor:string,

        public witness_one_name:string,
        public witness_one_address: string,
        public witness_one_city:string,
        public witness_one_postal: string,
        public witness_one_province: string,

        public witness_two_name:string,
        public witness_two_address: string,
        public witness_two_city:string,
        public witness_two_postal: string,
        public witness_two_province: string,

        public witness_lawyer:boolean,
        public witness_notary:boolean,

        public consent_given_notes:string,
        public consent_refused_notes:string,
        public lift_sedation:string,

        public conditions1a:boolean,
        public conditions1b:boolean,
        public conditions1c:boolean,

        public die_at_home:string,
        public request_maid:string,
        public consent_maid_notes:string,

        public refusals2a:boolean,
        public refusals2b:boolean,
        public refusals2c:boolean,
        public refusals2d:boolean,
        public refusals2e:boolean,
        public refusals2f:boolean,
        public refusals2g:boolean,

        public palliative3a:boolean,
        public palliative3b:boolean,

        public prolong_life4:boolean,
        public follow_acp1:boolean,
        public follow_acp2:boolean,
        public choose_section:string,

    )
    {}


}