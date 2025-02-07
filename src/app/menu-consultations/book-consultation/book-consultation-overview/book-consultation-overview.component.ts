import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BookConsultationContainerComponent} from "../book-consultation-container/book-consultation-container.component";
import { Meta, Title } from '@angular/platform-browser';

export type EditorType = 'assessment' | 'caregiver'  | 'patient'  | 'planning';
@Component({
  selector: 'app-book-consultation-overview',
  templateUrl: './book-consultation-overview.component.html',
  styleUrls: ['./book-consultation-overview.component.css']
})

export class BookConsultationOverviewComponent implements OnInit {

  @Input() @Output() client: Client;
  editor: EditorType = 'planning';

  selectedIntakeForm:string;

  @Input() title:string ='';
  @Input() quote:string ='';
  @Input() author:string ='';

  metaTitle = 'Book a Consultation | End of Life Support | Care Planning'
  metaDesc='Book a consultation from End of Life doula Karen Allan in person or via Zoom to learn how you can support yourself or your' +
      ' loved ones about end of life issues';

  constructor(private _bookConsultationContainerComponent: BookConsultationContainerComponent, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      {
        name: 'description',
        content: this.metaDesc,
      },
      {name: 'robots', content: 'index, follow'},
      {name: "viewport", content: "width=device-width,initial-scale=1"}
    ]);
  }

  get showPlanningEditor() {
    return this.editor === 'planning';
  }

  get showPatientEditor() {
    return this.editor === 'patient';
  }

  get showCaregiverEditor() {
    return this.editor === 'caregiver';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
    //alert("in overview selected type is " + type)
    this.getParentComponent().setIntakeFormType(type);
  }

  getParentComponent(): BookConsultationContainerComponent {
    return this._bookConsultationContainerComponent;
  }

// *************************************************************************************************************** *!/
  //formatBirthdateToPrint(): void {

    // This is a string like '19621123'
  /*  if (this.client.birthdate === '' && this.client.birthdate.length == 0) {
      return;
    }

    this.dataService.formatMonthStartBirthdateToPrint(this.client.birthdate)
        .subscribe(newName => this.updatedValue = newName);

    this.client.birthdate = this.updatedValue;*/
    //alert("Date is " + this.client.birthdate);
  //}

  printProfile() {
    window.print();
  }

}
