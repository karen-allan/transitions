import {Component, Input} from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {Question} from "../../../ts-files/question";
import {QUESTIONS} from "../../../ts-files/questions";
import * as Constants from 'src/app/ts-files/constants'
import {WRITE_WISH_LIST} from "src/app/ts-files/constants";

@Component({
  selector: 'app-make-wishes-container',
  templateUrl: './make-wishes-container.component.html',
  styleUrl: './make-wishes-container.component.css'
})
export class MakeWishesContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 20;

  lookupParent:string= Constants.PLAN_AHEAD
  lookupChild=Constants.THINK_ABOUT_YOUR_NEEDS

  title=Constants.WRITE_WISH_LIST;
  quote: string='Documentation is a love letter that you write to your future self.';
  author: string='Damian Conway';

  wishes: WishesWizard;
  wishesQuestions: Question[] = [];

  constructor() {
    // Need to deep copy the array so we don't keep overwriting the selectedAnswer in the QUESTIONS array objects
    QUESTIONS.forEach(question => {
      this.wishesQuestions.push(new Question(question.question_num, question.question_string, question.responses, 0));
    });
    this.wishes = new WishesWizard(0, '', this.wishesQuestions,'');
  }

}
