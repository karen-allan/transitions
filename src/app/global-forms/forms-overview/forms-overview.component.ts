import { Component, ViewChild } from '@angular/core';
import { Client } from '../../ts-files/client';
import { PrintSessionComponent } from '../../global-print/print-session/print-session.component';
import {IntakeClientSessionComponent} from "../intake-client-session/intake-client-session.component";
import {IntakeCaregiverSupportComponent} from "../intake-caregiver-support/intake-caregiver-support.component";
import {IntakePatientSupportComponent} from "../intake-patient-support/intake-patient-support.component";
import {IntakeMakePlanComponent} from "../intake-make-plan/intake-make-plan.component";
import {IntakeCovidComponent} from "../intake-covid/intake-covid.component";
import {DemographicsComponent} from "../common-intake-fields/demographics/demographics.component";
import {MedicalComponent} from "../common-intake-fields/medical/medical.component";

export type EditorType = 'assessment' | 'session'  | 'caregiver'  | 'patient'  | 'planning';

@Component({
  selector: 'app-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.css']
})

export class FormsOverviewComponent  {

  editor: EditorType = 'planning';

  model  = new Client(0, '', '','' ,'' ,'' ,'' , '', '','' ,
      '', '','' ,'', '', false, false, false,
      false ,false ,false ,false ,false, false,'',
      '',false,false, false, '', '', '','',
      '', '', false);

  @ViewChild(PrintSessionComponent) printProfile: PrintSessionComponent;
  @ViewChild(IntakeClientSessionComponent) intakeClientSessionComponent: IntakeClientSessionComponent;
  @ViewChild(IntakeCaregiverSupportComponent) intakeCaregiverSupportComponent: IntakeCaregiverSupportComponent;
  @ViewChild(IntakePatientSupportComponent) intakePatientSupportComponent: IntakePatientSupportComponent;
  @ViewChild(IntakeMakePlanComponent) intakeMakePlanComponent: IntakeMakePlanComponent;
  @ViewChild(IntakeCovidComponent) intakeCovidComponent: IntakeCovidComponent;
  @ViewChild(DemographicsComponent) demographicsComponent: DemographicsComponent;
  @ViewChild(MedicalComponent) medicalComponent: MedicalComponent;

  get showAssessmentForm() {
    return this.editor === 'assessment';
  }

  get showSessionForm() {
    return this.editor === 'session';
  }

  get showCaregiverForm() {
    return this.editor === 'caregiver';
  }

  get showPatientForm() {
    return this.editor === 'patient';
  }

  get showPlanningForm() {
    return this.editor === 'planning';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;

    if (this.editor === 'assessment') {
      this.intakeCovidComponent.setModel(this.model);
    }

    if (this.editor === 'session') {
      this.intakeClientSessionComponent.setModel(this.model);
    }

    if (this.editor === 'caregiver') {
      this.intakeCaregiverSupportComponent.setModel(this.model);
    }

    if (this.editor === 'patient') {
      this.intakePatientSupportComponent.setModel(this.model);
    }

    if (this.editor === 'planning') {
      this.intakeMakePlanComponent.setModel(this.model);
    }

    this.demographicsComponent.setModel(this.model);
    this.medicalComponent.setModel(this.model);
  }

  copyModelToPrintComponent(model: Client) {
    this.printProfile.setModel(model);

    // Bug-fix: window.setTimeout()
    // Setting the timeout like this adds the window.print() command
    // to the end of the event stack.
    // If you don't do this it calls window.print using the HTML that
    // was on the page before the model gets loaded.
    // The idea is that the copyModelToPrintComponent javascript function
    // is still running so the HTML hasn't been loaded until the method finishes
    window.setTimeout(function printClientData(){window.print();}, 0);
  }


}
