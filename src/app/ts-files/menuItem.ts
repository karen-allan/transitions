import {SubMenuItem} from "./subMenuItem";

export interface MenuItem {
    id: number;
    title: string;
    url?: string;
    // children?:MenuItem[];
    submenuItems?: SubMenuItem[];
}
