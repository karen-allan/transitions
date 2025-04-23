import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {SUB_MENU_ITEMS} from "../ts-files/subMenuItems";
import {SubMenuItem} from "../ts-files/subMenuItem";
import {PathObject} from "../ts-files/pathObject";
import {PATH_OBJECTS} from "../ts-files/pathObjects";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //selectedQuestion = Question;
 // provinces = PROVINCES;

  invokeFirstComponentFunction=new EventEmitter();
  subsVar:Subscription

  constructor() { }


  // ******************** GET SUB MENU ITEMS *************************
  getSubMenuItems(parentId: number): Observable<SubMenuItem[]> {
    var subMenuItems=[];
    for (var item of SUB_MENU_ITEMS) {
      if ((item.parent_id == parentId) ) {
        subMenuItems.push(item);
      }
    }

    return of(subMenuItems)
  }

// ******************** GET SUB MENU ITEMS *************************
 /* getLookupPathObjectById(id: number): Observable<PathObject[]> {
    var lookUpItems=[];
    for (var item of LOOKUP_PATHS) {
      if ((item.id == id) ) {
        lookUpItems.push(item);
      }
    }

    return of(lookUpItems)
  }*/

// ******************** GET LOOKUP ITEM *************************
  getLookupPathObjectById(id: number): Observable<PathObject> {
      var foundObject = PATH_OBJECTS[0];

      for (var obj of PATH_OBJECTS) {
        if ((obj.id == id) ) {
          foundObject = obj;
        }
      }

      return of(foundObject);
    }

  // ******************** GET QUESTION *************************
 /* getQuestion(id: number): Observable<Question> {
    var foundQuestion = QUESTIONS[0];

    for (var quest of QUESTIONS) {
      if ((quest.question_num == id) ) {
        foundQuestion = quest;
      }
    }

    return of(foundQuestion);
  }*/

  // ******************** GET PROVINCES *************************

  // From calling method > const provinces = this.dataService.getProvinces();
  //  this.dataService.getProvinces().then(provinces => this.provinces = provinces);
  //  alert("there are " +  this.provinces.length + " provinces")

   /* getProvinces(): Promise<Province[]> {
      return Promise.resolve(PROVINCES);
    }*/


  /* *************************************************************************************************************** */
  splitNames(name:string): Observable<string> {
   // alert("name is " + name);
    const resultArray: string[] = name.split(" ");
    let firstName = "";
    let middleName = "";
    let lastName = "";

    //greater than 0 so it has at least 1 so that is first name
    if (resultArray.length > 0) {
      firstName = this.capitalizeName(resultArray[0]);
      name = firstName;
    }

    //if only 2 elements then first name and last name only
    if (resultArray.length == 2) {
      lastName = this.capitalizeName(resultArray[1]);
      name = firstName + ' ' + lastName;
    }

    //if 3  elements then first name, middle name and last name
    else if ( (resultArray.length > 2) && (resultArray.length < 4) ) {
      middleName = this.capitalizeName(resultArray[1]);
      lastName = this.capitalizeName(resultArray[2]);
      name = firstName + ' ' + middleName + ' ' + lastName;
    }
   // alert("name is " + name);
    return of(name);
  }

  /* *************************************************************************************************************** */
  capitalizeName(name:string): string {

    if (name != '' && name.length > 0) {
      return name[0].toUpperCase() + name.slice(1);
    }

    return name;
  }

  /* *************************************************************************************************************** */
  // returns a string error message, instead i am using the one below that returns a boolean
  /*  checkIfDateIsValid(dateString:string): Observable<string> {
        //eg. comes in as 19621123

        let errorMssg = "";

        const yrstr = dateString.substring(0, 4);   //'1962'
        const mntstr = dateString.substring(4, 6);  //'11'
        const daystr = dateString.substring(6);     //'23'

        const formattedDate = yrstr + "/" + mntstr + "/" + daystr; //'1962/11/23'
        const birthdate = new Date(formattedDate); // Fri Nov 23 1962 00:00:00 GMT-0800 (Pacific Standard Time)

        if (this.isDate(birthdate)) {
          errorMssg = "";
        } else {
          errorMssg = "This is not a valid date. Please enter your birthdate as YYYYMMDD"
        }

      return of(errorMssg);

  }*/

  /* *************************************************************************************************************** */
  checkIfDateIsValid(dateString:string): Observable<boolean> {
    //eg. comes in as 19621123

    let validDate = false;

    const yrstr = dateString.substring(0, 4);   //'1962'
    const mntstr = dateString.substring(4, 6);  //'11'
    const daystr = dateString.substring(6);     //'23'

    const formattedDate = yrstr + "/" + mntstr + "/" + daystr; //'1962/11/23'

    var pattern = new RegExp(/^\d{4}\/(0[0-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/);
    validDate = pattern.test(formattedDate);

   // const birthdate = new Date(formattedDate); // Fri Nov 23 1962 00:00:00 GMT-0800 (Pacific Standard Time)
    // alert("client birthdate is " + birthdate);

    return of(validDate);
  }

  /* *************************************************************************************************************** */
  checkIfMonthStartDateIsValid(dateString:string): Observable<boolean> {
    //eg. comes in as 06191980
    let dateError = false;

    const monthStr = dateString.substring(0, 2);   //'06'
   // alert("month is " + monthStr);

    const dayStr = dateString.substring(2, 4);   //'19'
   // alert("day is " + dayStr);

    const yearStr = dateString.substring(4);   //'1980'
   // alert("year is " + yearStr);

    const formattedDate = monthStr + "/" + dayStr + "/" + yearStr; //'1962/11/23'
    //alert("formattedDate is " + formattedDate);

    const birthdate = new Date(formattedDate); // Fri Nov 23 1962 00:00:00 GMT-0800 (Pacific Standard Time)
   // alert("birthdate is " + birthdate);

    if (this.isDate(birthdate)) {
      let dateError = false;
    } else {
      let dateError = true;
    }

    return of(dateError);

  }

  /* *************************************************************************************************************** */
  /* called from the html */
  isDate(object: any): object is Date {
    return object instanceof Date && !isNaN(object.getTime());
  }

  /* *************************************************************************************************************** */
  formatPHNToPrint(phnNumber:string): Observable<string> {


    // 9300 632 514
    //start at 0 element and stop before 4th element (6)
    let firstPHN =  phnNumber.substring(0, 4);
    //start at 4th element (6) and end before 7th element (5)
    let secondPHN = phnNumber.substring(4, 7);
    //start at 7th element (5) and end before 10th element (at 9th element + 1) (4) ie 1 past the end
    let thirdPHN =  phnNumber.substring(7, 10);

    let formattedPHN = firstPHN + "-" + secondPHN + "-" + thirdPHN;

    return of(formattedPHN);
  }

  /* *************************************************************************************************************** */
  formatYearStartBirthdateToPrint(dateString:string): Observable<string> {

    // This is a string like '19621123'
    const yrstr = dateString.substring(0, 4);   //'1962'
    const mntstr = dateString.substring(4, 6);  //'11'
    const daystr = dateString.substring(6);     //'23'

    //const formattedDate = yrstr + "/" + mntstr + "/" + daystr; //'1962/11/23'
   // const birthdate = new Date(formattedDate); // Fri Nov 23 1962 00:00:00 GMT-0800 (Pacific Standard Time)

    // date is broken down into year, month and day with the /'s > 1962/11/23
  //  const strDOB = yrstr + "/" + mntstr + "/" + daystr;

    const numYear = Number(yrstr);
    //1962
    const numMonth = Number(mntstr) - 1;
    //11
    const numDay = Number(daystr);
    //23

    // Now that it is all numbers we can convert it to a Date this creates this value below
    // Fri Nov 23 1962 00:00:00 GMT-0800 (Pacific Standard Time)
    const dateDOB = new Date(numYear, numMonth, numDay);

    //alert("dateDOB as a Date is " + dateDOB);

    //this toDateString strips that stuff off to Fri Nov 23 1962
    return of(dateDOB.toDateString());

  }

  /* *************************************************************************************************************** */
  formatMonthStartBirthdateToPrint(dateString:string): Observable<string> {

    //eg. comes in as 06191980
    const monthStr = dateString.substring(0, 2);   //'06'
     //alert("month is " + monthStr);

    const dayStr = dateString.substring(2, 4);   //'19'
     //alert("day is " + dayStr);

    const yearStr = dateString.substring(4);   //'1980'
     //alert("year is " + yearStr);

  //  const formattedDate = monthStr + "/" + dayStr + "/" + yearStr; //'06/19/1980'
    //const birthdate = new Date(formattedDate); //

    //alert("birthdaate is " + birthdate);

    // date is broken down into year, month and day with the /'s > 1962/11/23
 //   const strDOB = yrstr + "/" + mntstr + "/" + daystr;

    const numYear = Number(yearStr);
    //1962
    const numMonth = Number(monthStr) - 1;
    //11
    const numDay = Number(dayStr);
    //23

    // Now that it is all numbers we can convert it to a Date this creates this value below

    const dateDOB = new Date(numYear, numMonth, numDay);



    //this toDateString strips that stuff off to Fri Nov 23 1962
    return of(dateDOB.toDateString());

  }

  /* *************************************************************************************************************** */

  /* formatDateString(dateString:string) {
     var formattedDate:string ='';

     if (dateString != '') {
       const yrstr = dateString.substring(0,4);
       const mntstr = dateString.substring(4,6);
       const daystr = dateString.substring(6);

       formattedDate = yrstr + "/" + mntstr + "/" + daystr;
       alert("formattedDate is " + formattedDate);

       this.parseTheDate(yrstr, mntstr, daystr )
       return(formattedDate);
     }
     else {
       return "";
     }
   }*/

  /* *************************************************************************************************************** */
  /* parseTheDate( year, month, day) {
     const numYear = Number(year);
     const numMonth = Number(month) - 1;
     const numDay = Number(day);

     const test = new Date(year, month, day);

   }*/
}
