import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  client = new Client();

  btnRegister:boolean = true;

  //JSON de clientes
  clients:Client[] = [];

  constructor(private service:ClientService){}

  select():void{
    this.service.select().subscribe(receber => this.clients = receber);
  }

  ngOnInit(){
    this.select();
  }
}
