import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';

import { PessoaModel } from '../../models/pessoaModel';

import { DialogService } from "ng6-bootstrap-modal";

import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  private dataPessoas: PessoaModel[];

  private pessoa: PessoaModel = { idPessoa: null, nome: '' };
  private pessoaInsert: PessoaModel = { idPessoa: 0, nome: '' };

  constructor(
    private pessoaService: PessoaService,
    private dialogService:DialogService
    ) { }

  ngOnInit() {
    this.recuperarPessoas();
  }

  public recuperarPessoas() {
    if (localStorage.getItem('token') != null) {
      this.pessoaService.getPessoas().subscribe(data => {
        this.dataPessoas = data.data
      });
    } else {
      console.log('logar');
    }
  }

  public recuperarPessoa() {
    if (localStorage.getItem('token') != null) {
      this.pessoaService.getPessoa(this.pessoa.idPessoa).subscribe(data => {
        if (data.data != null) {
          this.pessoa = data.data
        }
      });
    } else {
      console.log('logar');
    }
  }

  public inserirPessoa() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Inserir', 
        message:'Confirma inserir Pessoa?' })
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
              this.pessoaInsert.idPessoa = 0;
              this.pessoaService.postPessoa(this.pessoaInsert).subscribe(data => {
                this.pessoaInsert.idPessoa = 0;
                this.pessoaInsert.nome = '';
                this.recuperarPessoas();
                this.showAlert('Pessoa Incluída com sucesso!');
              });
            }
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },30000);
  }

  public excluirPessoa(pessoa : PessoaModel) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Excluir', 
        message:'Confirma excluir Pessoa?' })
        .subscribe((isConfirmed)=>{
            if(isConfirmed) {
              this.pessoaService.deletePessoa(pessoa.idPessoa).subscribe(data => {
                this.recuperarPessoas();
                this.showAlert('Pessoa excluída com sucesso!');
              });
            }
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },30000);
  }

  public limpar() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Inserir', 
        message:'Confirma limpar a lista?' })
        .subscribe((isConfirmed)=>{
            if(isConfirmed) {
              this.dataPessoas = [];
              this.showAlert('Lista limpa!');
            }
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },30000);
  }

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
