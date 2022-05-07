import { Component, OnInit } from '@angular/core';

export type EditorType = 'assessment' | 'caregiver'  | 'patient'  | 'planning';

@Component({
  selector: 'app-menu-for-consultations',
  templateUrl: './menu-for-consultations.component.html',
  styleUrls: ['./menu-for-consultations.component.css']
})

export class MenuForConsultationsComponent {

  editor: EditorType = 'planning';

  constructor() { }

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
  }


}
