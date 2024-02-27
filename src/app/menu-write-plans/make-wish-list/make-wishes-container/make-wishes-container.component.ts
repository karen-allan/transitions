import { Component } from '@angular/core';
import {WishesWizard} from "../../../ts-files/wishes-wizard";
import {Question} from "../../../ts-files/question";
import {QUESTIONS} from "../../../ts-files/questions";

@Component({
  selector: 'app-make-wishes-container',
  templateUrl: './make-wishes-container.component.html',
  styleUrl: './make-wishes-container.component.css'
})
export class MakeWishesContainerComponent {

  menuItemId:number  = 3;
  subMenuItemId:number = 30;

  detailHeaderName="header-think-about-needs"
  title="Think about your needs and wishes"

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
