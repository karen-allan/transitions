export class RepNine {

    constructor(
        public client_name: string,
        public client_address:string,
        public client_city:string,
        public client_postal:string,
        public global_province: 'B.C.',
        public client_dob:string,

        public rep_primary_name:string,
        public rep_primary_address:string,
        public rep_alternate_name:string,
        public rep_alternate_address:string,
        public instructions_for_reps:string,

        public witness_one_name:string,
        public witness_one_address: string,
        public witness_two_name:string,
        public witness_two_address: string,
        public witness_lawyer:boolean,
        public witness_notary:boolean,

        public choose_alternate:string,

    )
    {}


}