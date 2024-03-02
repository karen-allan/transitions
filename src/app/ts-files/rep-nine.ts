export class RepNine {

    constructor(
        public client_name: string,
        public client_address:string,

        public rep_primary_name:string,
        public rep_primary_address:string,

        public rep_alternate_name:string,
        public rep_alternate_address:string,

        public witness_one_name:string,
        public witness_one_address: string,

        public witness_two_name:string,
        public witness_two_address: string,

        public signing_date:string,
        public publish_date:string,

        public instructions_for_reps:string,
        public reasons_for_alternate_rep:string,
    )
    {}


}