import {Response} from "./response";

export class Question {

    constructor(
        public question_num: number,
        public question_string: string,
        public responses: Response[],
        public selectedAnswer?:number
    )
{}

}

