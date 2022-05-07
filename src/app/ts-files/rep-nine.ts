export class RepNine {

    constructor(
        public client_name: string,
        public client_address:string,
        public client_city:string,
        public client_postal:string,
        public client_province:string,
        public client_country:string,

        public rep_primary_name:string,
        public rep_primary_address:string,
        public rep_primary_city:string,
        public rep_primary_postal:string,
        public rep_primary_province:string,
        public rep_primary_country:string,

        public rep_alternate_name:string,
        public rep_alternate_address:string,
        public rep_alternate_city:string,
        public rep_alternate_postal:string,
        public rep_alternate_province:string,
        public rep_alternate_country:string,

        public optional_wishes:string,

        public witness_one_name:string,
        public witness_one_address: string,
        public witness_one_city: string,
        public witness_one_postal: string,
        public witness_one_province: string,
        public witness_one_country:string,

        public witness_two_name:string,
        public witness_two_address: string,
        public witness_two_city: string,
        public witness_two_postal: string,
        public witness_two_province: string,
        public witness_two_country:string,

        public signing_date:string
    )
    {}

}