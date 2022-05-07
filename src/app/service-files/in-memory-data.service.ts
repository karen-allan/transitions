import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../ts-files/client'

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

 // constructor() { }

  createDb(){

      const clients =  [
      {  id:  1,  name:  'Katie', cellPhone: '604-345-3442', email: 'karenallan17@gmail.com',
        address: '48E Woodstock Ave', city: 'Vancouver', provState: 'BC', pc: 'V5W-0B7', country: 'Canada', birthdate:'July 17, 1955',
        occupation: 'Amazing Healer', referredBy: 'Joe Jones', emergName:'Mr. Mike', emergRelation:'Husband', emergPhone:'604-781-7732', mainFocus:'self love'},

      {  id:  2,  name:  'Michael', cellPhone: '604-781-7732', email: 'mike@mindworks-software.com',
        address: '123 Main Street', city: 'Vancouver', provState: 'BC', pc: 'VRU-9Y6', country: 'Canada', birthdate:'November 23, 1962',
        occupation: 'Software Architect', referredBy: 'Jane Smith',  emergName:'Karen', emergRelation:'Wife', emergPhone:'123-345-3442', mainFocus: 'happiness'}
    ];

     return {clients};
  }

    constructor() { }

  genId(clients: Client[]): number {
      return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 1;
  }
}

