import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DialogService } from "ng6-bootstrap-modal";
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

import { ClienteService } from "src/app/services/cliente.service";
import { ClienteModel } from "src/app/models/clienteModel";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent implements OnInit {
  private dataClientes: ClienteModel[];
  

  constructor(
    private clienteService: ClienteService,
    
    private dialogService:DialogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recuperarClientes();
  }

  public recuperarClientes() : void {
    this.clienteService.getClientes().subscribe(data => {
      this.dataClientes = data.data
    });
  };

  public excluirCliente(cliente : ClienteModel) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Excluir', 
        message:'Confirma excluir Cliente?' })
        .subscribe((isConfirmed)=>{
            if(isConfirmed) {
              this.clienteService.deleteCliente(cliente.idCliente).subscribe(data => {
                this.recuperarClientes();
                this.showAlert('Cliente excluído com sucesso!');
              });
            }
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },30000);
  }

  editarCliente(cliente : ClienteModel) {
    // this.router.navigate(["cadastro-cliente", cliente.idCliente], {  skipLocationChange: true });
    this.router.navigate(["cadastro-cliente", cliente.idCliente]);
  };

  showAlert(mensagem: string) {
    let disposable = this.dialogService.addDialog(AlertComponent, {
        title:'Alerta', 
        message: mensagem,
        exception: null})
        .subscribe((isConfirmed)=>{
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },10000);
  }
}
