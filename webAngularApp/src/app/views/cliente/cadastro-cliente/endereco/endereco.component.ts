import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { DialogService } from "ng6-bootstrap-modal";
import { ConfirmComponent } from "src/app/components/confirm/confirm.component";
import { AlertComponent } from "src/app/components/alert/alert.component";

import { EnderecoModel } from "src/app/models/enderecoModel";

@Component({
  selector: "app-endereco",
  templateUrl: "./endereco.component.html",
  styleUrls: ["./endereco.component.css"]
})
export class EnderecoComponent implements OnInit {

  public maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];  

  @Input() enderecosCliente: EnderecoModel[];
  @Output() removeEndereco = new EventEmitter();
  @Output() updateEndereco = new EventEmitter();
  @Output() insertEndereco = new EventEmitter();

  @Input() listaUf: string[];

  public enderecoForm: FormGroup;
  enderecoEdit: EnderecoModel;
  isEdit : boolean;
  
  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isEdit = false;
    this.enderecoEdit = new EnderecoModel();

    this.enderecoForm = this.formBuilder.group({
      logradouro: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(5)
      ]),
      numeroLogradouro: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(1)
      ]),
      complemento: this.formBuilder.control({ value: '' }),
      municipio: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(5)
      ]),
      uf: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(2)
      ]),
      cep: this.formBuilder.control({ value: '' }, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  novoEndereco() {
    this.isEdit = true;
    this.enderecoEdit = new EnderecoModel();
    this.enderecoForm.reset();
  }

  editarEndereco(endereco: EnderecoModel) {
    this.isEdit = true;
    this.enderecoForm.reset();
    this.enderecoEdit = JSON.parse(JSON.stringify(endereco));
  }

  salvarEndereco() {
    if (this.enderecoEdit.idEndereco == null || this.enderecoEdit.idEndereco === undefined) {
      this.insertEndereco.emit(this.enderecoEdit);
    } else {
      this.updateEndereco.emit(this.enderecoEdit);
    }
    this.isEdit = false;
    this.enderecoEdit = new EnderecoModel();
  }

  public excluirEndereco(endereco: EnderecoModel) {
    let disposable = this.dialogService
      .addDialog(ConfirmComponent, {
        title: "Excluir",
        message: "Confirma excluir Endereço?"
      })
      .subscribe(isConfirmed => {
        if (isConfirmed) {
          console.log("chegou remover");
          this.removeEndereco.emit(endereco);
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 30000);
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


}
