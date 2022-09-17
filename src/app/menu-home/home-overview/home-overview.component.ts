import {Component, Input, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.css']
})
export class HomeOverviewComponent implements OnInit {

   @Input() title:string =''
   @Input() slogan:string =''

    /* less than 60 */
    metaTitle='End-of-life Doula Support Vancouver | End of life Planning'

    /* less than 160 */
    metaDesc='Get help with end-of-life planning, know the documents you need to sign. ' +
        'Get patient and caregiver support from Practitioner Karen Allan based in Vancouver, BC'

    constructor(private titleService: Title, private metaService:Meta) { }

    ngOnInit(): void {

        this.titleService.setTitle(this.metaTitle);
        this.metaService.addTags([
            {name: 'description', content: this.metaDesc},
            {name: 'robots', content: 'index, follow'},
            {name:"viewport", content:"width=device-width,initial-scale=1" }
        ]);




    }


}
