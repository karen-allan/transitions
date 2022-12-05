import { Component, OnInit } from '@angular/core';
import {TsdmClient} from "../../../ts-files/tsdm-client";
import {DoulaClientService} from "../../../service-files/doula-client.service";

@Component({
  selector: 'app-tsdm-wizard-container',
  templateUrl: './tsdm-wizard-container.component.html',
  styleUrls: ['./tsdm-wizard-container.component.css']
})
export class TsdmWizardContainerComponent implements OnInit {

  menuItemId=6;
  subMenuItemId=0;

  title:string='Pick your Health Advocate';
  detailHeaderName="header-wizard"

  clients: TsdmClient[];
  client: TsdmClient;

  constructor(private clientService: DoulaClientService) { }

  ngOnInit(): void {
  }

  addClient(id:number): void {
      if (id==0) { return; }
    this.clientService.addClient({ id } as TsdmClient)
        .subscribe(client => {
          this.clients.push(client);
        });
  }



}
