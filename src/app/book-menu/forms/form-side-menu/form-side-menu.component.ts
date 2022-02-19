import { Component, OnInit } from '@angular/core';
import { Client } from '../../../ts-files/client';

// import { PrintClientProfileComponent } from '../print-client-profile/print-client-profile.component';

export type EditorType = 'assessment' | 'session'  | 'consult';
@Component({
  selector: 'app-form-side-menu',
  templateUrl: './form-side-menu.component.html',
  styleUrls: ['./form-side-menu.component.css']
})
export class FormSideMenuComponent {

  editor: EditorType = 'session';

  // @ViewChild(PrintClientProfileComponent) printProfile: PrintClientProfileComponent;

  get showAssessmentForm() {
    return this.editor === 'assessment';
  }

  get showSessionForm() {
    return this.editor === 'session';
  }

  get showConsultationForm() {
    return this.editor === 'consult';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

 /* copyModelToPrintComponent(model: Client) {
    this.printProfile.setModel(model);

    // Bug-fix: window.setTimeout()
    // Setting the timeout like this adds the window.print() command
    // to the end of the event stack.
    // If you don't do this it calls window.print using the HTML that
    // was on the page before the model gets loaded.
    // The idea is that the copyModelToPrintComponent javascript function
    // is still running so the HTML hasn't been loaded until the method finishes
    window.setTimeout(function printClientData(){window.print();}, 0);
  }*/

}
