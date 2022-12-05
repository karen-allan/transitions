import {Question} from "./question";
import {QUESTIONS} from "./questions";

export class WishesWizard {

    constructor(
        public id: number,
        public client_name: string,
        public questions:Question[]=QUESTIONS,
        public signing_date:string
    )
    {}

}