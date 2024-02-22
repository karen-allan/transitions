import { Component, OnInit } from '@angular/core';
import {QUESTIONS} from "../../../ts-files/questions";
import {Question} from "../../../ts-files/question";
import {WishesWizard} from "../../../ts-files/wishes-wizard";

@Component({
  selector: 'app-think-about-needs-container',
  templateUrl: './think-about-needs-container.component.html',
  styleUrls: ['./think-about-needs-container.component.css']
})
export class ThinkAboutNeedsContainerComponent implements OnInit {

  menuItemId:number  = 2;
  subMenuItemId:number = 20;

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

  ngOnInit(): void {
  }

}
