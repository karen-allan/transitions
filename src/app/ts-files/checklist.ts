export class Checklist {

    constructor(
        public client_name: string,
        public client_address:string,
        public client_city:string,
        public client_postal:string,

        public rep_primary_name:string,
        public rep_primary_address:string,
        public rep_primary_city:string,
        public rep_primary_postal:string,

        public rep_alternate_name:string,
        public rep_alternate_address:string,
        public rep_alternate_city:string,
        public rep_alternate_postal:string,

        public notes:string,
    )
    {}


}