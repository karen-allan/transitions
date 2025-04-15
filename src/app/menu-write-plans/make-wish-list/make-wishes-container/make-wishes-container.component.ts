import {Component, OnInit} from '@angular/core';
import * as Constants from "../../../ts-files/constants";
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {Question} from "../../../ts-files/question";
import {QUESTIONS} from "../../../ts-files/questions";
import {PATH_OBJECTS} from "../../../ts-files/pathObjects";
import {PathObject} from "../../../ts-files/pathObject";
import {DataService} from "../../../service-files/data.service";

@Component({
  selector: 'app-make-wishes-container',
  templateUrl: './make-wishes-container.component.html',
  styleUrl: './make-wishes-container.component.css'
})
export class MakeWishesContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 20;

  pathObjects = PATH_OBJECTS;
  pathObject: PathObject = PATH_OBJECTS[0];
  chosenParentId= 1;

  title=Constants.WRITE_WISH_LIST;
  quote: string='Documentation is a love letter that you write to your future self.';
  author: string='Damian Conway';

  wishes: WishesWizard;
  wishesQuestions: Question[] = [];

  constructor(private dataService: DataService) {
    // Need to deep copy the array so we don't keep overwriting the selectedAnswer in the QUESTIONS array objects
    QUESTIONS.forEach(question => {
      this.wishesQuestions.push(new Question(question.question_num, question.question_string, question.responses, 0));
    });
    this.wishes = new WishesWizard(0, '', this.wishesQuestions,'');
  }

  ngOnInit(): void {
    this.getLookupPathObject(this.chosenParentId);
  }

  getLookupPathObject(id:number): void {
    for (var pathObj of this.pathObjects) {
      this.dataService.getLookupPathObjectById(id)
          .subscribe(itemList => this.pathObject = itemList);

    }
  }
}
