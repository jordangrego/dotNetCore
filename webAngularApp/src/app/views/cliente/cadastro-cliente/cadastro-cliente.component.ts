import { Component, OnInit } from "@angular/core";
import { UUID } from "angular2-uuid";

import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";

import { DialogService } from "ng6-bootstrap-modal";
import { ConfirmComponent } from "src/app/components/confirm/confirm.component";
import { AlertComponent } from "src/app/components/alert/alert.component";

import { ClienteService } from "src/app/services/cliente.service";
import { ClienteModel } from "src/app/models/clienteModel";
import { EnderecoModel } from "src/app/models/enderecoModel";
import { TelefoneModel } from "src/app/models/telefoneModel";

import { UfService } from "src/app/services/uf.service";

@Component({
  selector: "app-cadastro-cliente",
  templateUrl: "./cadastro-cliente.component.html",
  styleUrls: ["./cadastro-cliente.component.css"]
})
export class CadastroClienteComponent implements OnInit {
  public activeTabIndex: number = 0;
  private cliente: ClienteModel;
  private listaUf : string[] = [];
  public clienteForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ufService: UfService
  ) {}

  ngOnInit() {
    
    this.recuperarUfs();
    this.cliente = new ClienteModel();
    this.cliente.idCliente = 0;
    this.cliente.nome = '';
    this.cliente.cpfCnpj = '';
    this.cliente.dataCadastro = new Date();
    this.cliente.listaEnderecos = [];
    this.cliente.listaTelefones = [];

    this.clienteForm = this.formBuilder.group({
      name: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(5)
      ]),
      cpfcnpj: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(5)
      ]),
      cadastro: this.formBuilder.control({ value: '', disabled: true })
    });

    let idCliente: number = 0;
    if (
      this.activatedRoute.snapshot.paramMap.get('id') != null &&
      this.activatedRoute.snapshot.paramMap.get('id') != undefined
    ) {
      idCliente = +this.activatedRoute.snapshot.paramMap.get('id');

      this.clienteService.getCliente(idCliente).subscribe(data => {
        this.cliente = data.data;
      });
    }
  }

  public recuperarUfs() : void {
    this.ufService.getUfs().subscribe(data => {
      this.listaUf = data.data;
    });
  };

  checkClient(cliente: ClienteModel): void {
    let isInclusao: boolean = this.cliente.idCliente > 0 ? false : true;
    let title: string = isInclusao ? "Incluir" : "Alterar";
    let message: string = isInclusao
      ? "Confirma incluir Cliente?"
      : "Confirma alterar Cliente?";

    let disposable = this.dialogService
      .addDialog(ConfirmComponent, {
        title: title,
        message: message
      })
      .subscribe(isConfirmed => {
        if (isConfirmed) {
          if (isInclusao) {
            this.clienteService
              .postCliente(this.cliente)
              .subscribe(() =>
                this.showAlertRedirect("Cliente inserido com sucesso")
              );
          } else {
            this.clienteService
              .putCliente(this.cliente)
              .subscribe(() =>
                this.showAlertRedirect("Cliente alterado com sucesso")
              );
          }
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 30000);
  }

  removeEndereco(endereco : EnderecoModel) {
    console.log(endereco.idEndereco);
    this.cliente.listaEnderecos = this.cliente.listaEnderecos.filter(function(obj) {
      return obj.idEndereco !== endereco.idEndereco;
    });

    console.log('qtd end: ' + this.cliente.listaEnderecos.length)

    this.showAlert('Endereço removido');
  }

  insertEndereco(endereco : EnderecoModel) {
    endereco.idEndereco = UUID.UUID();
    this.cliente.listaEnderecos.push(endereco);
    this.showAlert('Endereço inserido');
  }

  updateEndereco(endereco : EnderecoModel) {
    let indexEndereco = this.cliente.listaEnderecos.map(function(x) {return x.idEndereco; }).indexOf(endereco.idEndereco);
    console.log(indexEndereco);
    this.cliente.listaEnderecos[indexEndereco] = endereco;
    this.showAlert('Endereço alterado');
  }

  removeTelefone(telefone : TelefoneModel) {
    console.log(telefone.idTelefone);
    this.cliente.listaTelefones = this.cliente.listaTelefones.filter(function(obj) {
      return obj.idTelefone !== telefone.idTelefone;
    });

    this.showAlert('Telefone removido');
  }

  insertTelefone(telefone : TelefoneModel) {
    telefone.idTelefone = UUID.UUID();
    this.cliente.listaTelefones.push(telefone);
    this.showAlert('Telefone inserido');
  }

  updateTelefone(telefone : TelefoneModel) {
    let indexTelefone = this.cliente.listaTelefones.map(function(x) {return x.idTelefone; }).indexOf(telefone.idTelefone);
    this.cliente.listaTelefones[indexTelefone] = telefone;
    this.showAlert('Telefone alterado');
  }

  showAlert(mensagem: string) {
    let disposable = this.dialogService
      .addDialog(AlertComponent, {
        title: "Alerta",
        message: mensagem,
        exception: null
      })
      .subscribe(isConfirmed => {});
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

  showAlertRedirect(mensagem: string) {
    let disposable = this.dialogService
      .addDialog(AlertComponent, {
        title: "Alerta",
        message: mensagem,
        exception: null
      })
      .subscribe(isConfirmed => {
        this.router.navigate(["/cliente"]);
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }
}
