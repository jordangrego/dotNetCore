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

import { TelefoneModel } from "src/app/models/telefoneModel";

@Component({
  selector: "app-telefone",
  templateUrl: "./telefone.component.html",
  styleUrls: ["./telefone.component.css"]
})
export class TelefoneComponent implements OnInit {
  public maskTel = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  @Input() telefonesCliente: TelefoneModel[];
  @Output() removeTelefone = new EventEmitter();
  @Output() updateTelefone = new EventEmitter();
  @Output() insertTelefone = new EventEmitter();

  public telefoneForm: FormGroup;
  telefoneEdit: TelefoneModel;
  isEdit: boolean;

  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isEdit = false;
    this.telefoneEdit = new TelefoneModel();

    this.telefoneForm = this.formBuilder.group({
      codPais: this.formBuilder.control({ value: "" }, [
        Validators.required,
        Validators.minLength(2)
      ]),
      ddd: this.formBuilder.control({ value: "" }, [
        Validators.required,
        Validators.minLength(2)
      ]),
      numeroTelefone: this.formBuilder.control({ value: "" }, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  novoTelefone() {
    this.isEdit = true;
    this.telefoneEdit = new TelefoneModel();
    this.telefoneForm.reset();
  }

  editarTelefone(telefone: TelefoneModel) {
    this.isEdit = true;
    this.telefoneForm.reset();
    this.telefoneEdit = JSON.parse(JSON.stringify(telefone));
  }

  salvarTelefone() {
    if (
      this.telefoneEdit.idTelefone == null ||
      this.telefoneEdit.idTelefone === undefined
    ) {
      this.insertTelefone.emit(this.telefoneEdit);
    } else {
      this.updateTelefone.emit(this.telefoneEdit);
    }
    this.isEdit = false;
    this.telefoneEdit = new TelefoneModel();
  }

  public excluirTelefone(telefone: TelefoneModel) {
    let disposable = this.dialogService
      .addDialog(ConfirmComponent, {
        title: "Excluir",
        message: "Confirma excluir telefone?"
      })
      .subscribe(isConfirmed => {
        if (isConfirmed) {
          this.removeTelefone.emit(telefone);
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
