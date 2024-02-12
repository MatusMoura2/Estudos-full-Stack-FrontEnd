import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  btnRegister:boolean = true;

  //JSON de clientes
  clientes:Client[] = [];

  constructor(private service:ClientService){}

  select():void{
    this.service.select().subscribe(receber => this.clientes = receber);
  }
}
