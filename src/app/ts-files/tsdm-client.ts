export class TsdmClient {

    constructor(
        public id: number,
        public client_name: string,
        public date:string,
        public spouse_name:string,
        public spouse_phone:string,
        public child_name:string,
        public child_phone:string,
        public parent_name:string,
        public parent_phone:string,
        public sibling_name:string,
        public sibling_phone: string,
        public grandparent_name:string,
        public grandparent_phone:string,
        public grandchild_name:string,
        public grandchild_phone:string,
        public related_by_birth_name:string,
        public related_by_birth_phone:string,
        public friend_name:string,
        public friend_phone:string,
        public related_by_marriage_name:string,
        public related_by_marriage_phone:string,
        public persona_non_grata_name:string,
        public persona_non_grata_phone:string
    )
    {}

}