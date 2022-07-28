import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../ts-files/client";
import {BookConsultationContainerComponent} from "../book-consultation-container/book-consultation-container.component";
import {BookConsultationOverviewComponent} from "../book-consultation-overview/book-consultation-overview.component";

export type EditorType = 'assessment' | 'caregiver'  | 'patient'  | 'planning';

@Component({
  selector: 'app-menu-for-consultations',
  templateUrl: './menu-for-consultations.component.html',
  styleUrls: ['./menu-for-consultations.component.css']
})

export class MenuForConsultationsComponent implements OnInit {

  @Input() model: Client;
  editor: EditorType = 'planning';

  constructor(private _bookConsultationOverviewComponent: BookConsultationOverviewComponent) { }

  ngOnInit() {
    this.getGrandparentComponent().selectedIntakeForm = this.editor;
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
    this.getGrandparentComponent().selectedIntakeForm = type;
  }

  getGrandparentComponent(): BookConsultationContainerComponent {
    return this._bookConsultationOverviewComponent.getParentComponent();
  }

}
