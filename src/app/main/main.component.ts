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

  table:boolean = true;

  btnRegister:boolean = true;

  //JSON de clientes
  clients:Client[] = [];

  constructor(private service:ClientService){}

  select():void{
    this.service.select().subscribe(receive => this.clients = receive);
  }

  register():void{
    this.service.register(this.client).subscribe(receive => {
      //cadastrar cliente
      this.clients.push(receive);

      //Limpar formulario
       this.client = new Client();


       alert('Novo cliente cadastrado!')
    
    
    } );
  }

  selectClient(position:number):void{

    this.client = this.clients[position]

    this.btnRegister = false;

    this.table = false;
  }

  edit():void{
    this.service.edit(this.client).subscribe(receive => {

      //obtendo posição do cliente no vetor
      let position = this.clients.findIndex(obj => {
        return obj.id == receive.id
      });

      this.clients[position]=receive;

      this.client = new Client();

      this.btnRegister=true;
      this.table =true;

      alert('tabela atualizada!')
      
    });
  }
  remove():void{
    this.service.remove(this.client.id).subscribe(receive => {

      //obtendo posição do cliente no vetor
      let position = this.clients.findIndex(obj => {
        return obj.id == this.client.id;
      });

      this.clients.splice(position,1);

      this.client = new Client();

      this.btnRegister=true;
      this.table =true;

      alert('cliente removido!')
      
    });
  }

  ngOnInit(){
    this.select();
  }
}
