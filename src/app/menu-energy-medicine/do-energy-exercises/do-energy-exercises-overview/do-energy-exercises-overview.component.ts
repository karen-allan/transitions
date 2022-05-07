import {Component, Input, OnInit} from '@angular/core';
import {DER_EXERCISES} from "../../../ts-files/derExercises";
import {DerExercise} from "../../../ts-files/derExercise";
import {DataService} from "../../../service-files/data.service";

@Component({
  selector: 'app-do-energy-exercises-overview',
  templateUrl: './do-energy-exercises-overview.component.html',
  styleUrls: ['./do-energy-exercises-overview.component.css']
})
export class DoEnergyExercisesOverviewComponent implements OnInit {

  @Input() title='';

  selectedExercise: DerExercise = DER_EXERCISES[0];
  exercises = DER_EXERCISES;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getExercises()
  }

  getExercises(): void {
    this.dataService.getExercises()
        .subscribe(exerciseList => this.exercises = exerciseList);
  }

  getDerExercise(id: number) {
    this.dataService.getExercise(id)
        .subscribe(selEx => this.selectedExercise = selEx);
  }
}