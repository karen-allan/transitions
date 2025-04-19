import {Component, EventEmitter, Input} from '@angular/core';
import {WishesWizard} from "../../../../ts-files/wishes-wizard";
import {Question} from "../../../../ts-files/question";
import {QUESTIONS} from "../../../../ts-files/questions";
import * as Constants from "../../../../ts-files/constants";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-screen-form-make-wish-list-container',
  templateUrl: './screen-form-make-wish-list-container.component.html',
  styleUrl: './screen-form-make-wish-list-container.component.css'
})
export class ScreenFormMakeWishListContainerComponent {

  menuItemId:number  = 2;
  subMenuItemId:number = 20;

  lookupParent1:string= Constants.PLAN_AHEAD
  lookupChild1=Constants.THINK_ABOUT_YOUR_NEEDS

  title=Constants.WRITE_WISH_LIST;
  quote: string='Documentation is a love letter that you write to your future self.';
  author: string='Damian Conway';
  selectedQuestion:Question;
  wishes: WishesWizard;
  wishesQuestions: Question[] = [];
  @Input() event: EventEmitter<any> = new EventEmitter();

  /* Coming from the make-wish-list-overview in mobile non-modal mode */
  modal:boolean=false;

  constructor(private route: ActivatedRoute, private router: Router) {

    QUESTIONS.forEach(question => {
      this.wishesQuestions.push(new Question(question.question_num, question.question_string, question.responses, 0));
    });
    this.wishes = new WishesWizard(0, '', this.wishesQuestions,'');
  }

  /* *************************************************************************************************************** */


}