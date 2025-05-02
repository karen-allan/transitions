import {CitationObject} from "./citation";


export interface FactObject {
    id:number;
    copy:string;
    url:string;
    citation:string;
    sup:number;
    // citation:CitationObject;
}