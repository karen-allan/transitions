
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {TsdmClient} from "../ts-files/tsdm-client";

@Injectable({
  providedIn: 'root'
})
export class DoulaClientService {

  private clientsUrl = 'api/clients';  // URL to web api
  clients: TsdmClient[];

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

 /* getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.clientsUrl)
  }*/

  /** POST: add a new client to the server */

  addClient(client: TsdmClient): Observable<TsdmClient> {
    return this.httpClient.post<TsdmClient>(this.clientsUrl, client, this.httpOptions);
    this.clients.push(client);
  }


}