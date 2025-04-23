import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BookConsultationContainerComponent} from "../book-consultation-container/book-consultation-container.component";
import { Meta, Title } from '@angular/platform-browser';
import {formatDate} from "@angular/common";

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

  @Input() consult1a:string="";
  @Input() consult2a:string="";
  @Input() consult3a:string="";

  @Input() consult1b:string="";
  @Input() consult2b:string="";
  @Input() consult3b:string="";

  metaTitle = 'Book a Consultation | End of Life Support | Care Planning'
  metaDesc='Book a consultation from in person or via Zoom to get can support yourself or your' +
      ' loved ones regarding end of life issues';

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

   // this.initializeData();
    this.clearData();
    this.setCurrentDate();
  }

  /* *************************************************************************************************************** */
  setCurrentDate() {
    const today = new Date();
    this.client.defaultDate= formatDate(today, 'longDate',  'en-US')
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

  /* *************************************************************************************************************** */
  initializeData() {
    this.client.name = "Karen Gail Allan"
    this.client.cellPhone="6043453442"
    this.client.email="karen@mindworks-software.com"
    this.client.address="2608 Airstrip Road"
    this.client.city="Anglemont"
    this.client.provState="B.C."
    this.client.pc="V5W0P3"


    this.client.birthdate="06191980"
    this.client.occupation='Ruler of the Universe'
    this.client.referredBy="Sandra Bullock"

    this.client.emergName="Michael Roy Allan"
    this.client.emergPhone="6047817732"
    this.client.emergRelation="Spicy Lover"

    this.client.medsSupplements="High Blood Pressure pills, Vitamins, Sleeping Pills, CBD"
    this.client.highBloodPressure=true;
    this.client.mentalIllness=true;
    this.client.autoImmuneDisease=true;
    this.client.eolFrailty="frailtyChart-1"
    this.client.eolPatientFocus3 = true;
    this.client.eolPatientFocus5 = true;
    this.client.eolPatientFocus7 = true;
    this.client.eolPatientFocus9 = true;
    this.client.eolPatientFocus10 = true;

    this.client.eolPatientDetails="I can not say much as everyone is listening and i am not being paranoid. And you are also listening!"
    this.client.illnessDetails="The details of my illnesses are at best indescribable sorry spelling mistake"

    this.client.eolCaregiverFocus5=true;
    this.client.eolCaregiverFocus3=true;

    this.client.eolCaregiverDetails="I am left all alone to do everything while all they think about is the money they are going to make" +
        " off the inheritance."

    this.client.eolPlanFocus2=true;
    this.client.eolPlanFocus4=true;
    this.client.eolPlanFocus6=true;
    this.client.eolPlanFocus8=true;

    this.client.eolPlanDetails="I want to plan everything so my kids don't have to do this on their own. It is the least I can do."
  }

  /* *************************************************************************************************************** */
  clearData() {
    this.client.name = ""
    this.client.cellPhone=""
    this.client.email=""
    this.client.address=""
    this.client.city=""
    this.client.provState="B.C."
    this.client.pc=""

    this.client.birthdate=""
    this.client.occupation=''
    this.client.referredBy=""

    this.client.emergName=""
    this.client.emergPhone=""
    this.client.emergRelation=""

    this.client.medsSupplements=""

    this.client.heartDisease=false;
    this.client.cancer=false;
    this.client.stroke=false;
    this.client.highBloodPressure=false;
    this.client.diabetes=false;
    this.client.mentalIllness=false;
    this.client.seizures=false;
    this.client.autoImmuneDisease=false;
    this.client.none=true;
    this.client.illnessDetails=""

    this.client.eolFrailty="frailtyChart-1"

    this.client.eolPlanFocus0=false;
    this.client.eolPlanFocus1=false;
    this.client.eolPlanFocus2=false;
    this.client.eolPlanFocus3=false;
    this.client.eolPlanFocus4=false;
    this.client.eolPlanFocus5=false;
    this.client.eolPlanFocus6=false;
    this.client.eolPlanFocus7=false;
    this.client.eolPlanFocus8=false;
    this.client.eolPlanFocus9=false;
    this.client.eolPlanDetails=""

    this.client.eolPatientFocus0 = false;
    this.client.eolPatientFocus1 = false;
    this.client.eolPatientFocus2 = false;
    this.client.eolPatientFocus3 = false;
    this.client.eolPatientFocus4 = false;
    this.client.eolPatientFocus5 = false;
    this.client.eolPatientFocus6 = false;
    this.client.eolPatientFocus7 = false;
    this.client.eolPatientFocus8 = false;
    this.client.eolPatientFocus9 = false;
    this.client.eolPatientFocus10 = false;
    this.client.eolPatientFocus11 = false;
    this.client.eolPatientDetails=""

    this.client.eolCaregiverFocus0=false;
    this.client.eolCaregiverFocus1=false;
    this.client.eolCaregiverFocus2=false;
    this.client.eolCaregiverFocus3=false;
    this.client.eolCaregiverFocus4=false;
    this.client.eolCaregiverFocus5=false;
    this.client.eolCaregiverFocus6=false;
    this.client.eolCaregiverFocus7=false;
    this.client.eolCaregiverFocus8=false;
    this.client.eolCaregiverFocus9=false;
    this.client.eolCaregiverDetails=""


  }





}
