import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as FileSaver from 'file-saver';

import { DialogService } from "ng6-bootstrap-modal";
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ArquivoService } from "src/app/services/arquivo.service";
import { RestClientService } from 'src/app/services/rest-client.service';
import { ArquivoModel } from '../../models/arquivoModel';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  private dataArquivos: ArquivoModel[];
  private arquivoEnvio: ArquivoModel;
  private uploadFile: any;
  private conteudoArquivoBase64: any;
  private nomeArquivoEnvio: string;
  private isReadingFile: boolean = false;
  private limiteTamanhoArquivoMegas: number = 10;

  constructor(
    private arquivoService: ArquivoService,
    private restClientService: RestClientService,
    private dialogService: DialogService,
    private router: Router) { }

  ngOnInit() {
    this.arquivoEnvio = new ArquivoModel();
    this.recuperarArquivos();
  }

  public recuperarArquivos(): void {
    this.arquivoService.getArquivos().subscribe(data => {
      this.dataArquivos = data.data
    });
  };

  public excluirArquivo(arquivo: ArquivoModel) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title: 'Excluir',
      message: 'Confirma excluir Arquivo?'
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.arquivoService.deleteArquivo(arquivo.idFile).subscribe(data => {
            this.recuperarArquivos();
            this.showAlert('Arquivo excluído com sucesso!');
          });
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 30000);
  }

  public async downloadArquivo(arquivo: ArquivoModel): Promise<void> {
    const blob = await this.restClientService.downloadResource('files/' + arquivo.idFile);
    FileSaver.saveAs(blob, arquivo.nomeFile);
  }

  public enviarArquivo() {
    if (this.nomeArquivoEnvio != null && this.nomeArquivoEnvio != undefined && this.nomeArquivoEnvio.length > 0
      && this.conteudoArquivoBase64 != null && this.conteudoArquivoBase64 != undefined && this.conteudoArquivoBase64.length > 0) {
      this.arquivoEnvio = new ArquivoModel();
      this.arquivoEnvio.nomeFile = this.nomeArquivoEnvio;
      this.arquivoEnvio.conteudoFileBase64 = this.conteudoArquivoBase64;
      this.arquivoService.postArquivo(this.arquivoEnvio).subscribe(data => {
        this.uploadFile = null;
        this.conteudoArquivoBase64 = null;
        this.nomeArquivoEnvio = null;
        this.recuperarArquivos();
        this.showAlert('Arquivo salvo com sucesso!');
      });
    } else {
      this.showAlert('Escolha o arquivo antes de enviar');
    }
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    this.isReadingFile = true;
    var file: File = inputValue.files[0];
    if (file.size <= (this.limiteTamanhoArquivoMegas * 1024 * 1024)) {
      this.nomeArquivoEnvio = file.name;
      var myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.conteudoArquivoBase64 = myReader.result.toString().split(',')[1];
        this.isReadingFile = false;
      }
      myReader.readAsDataURL(file);
    } else {
      let tamanho = this.formatBytes(file.size, 2);
      this.uploadFile = null;
      this.conteudoArquivoBase64 = null;
      this.nomeArquivoEnvio = null;
      this.isReadingFile = false;
      this.showAlert('Tamanho do arquivo maior que o permitido. Tamanho Atual: ' + tamanho);
    }
  }

  formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 Bytes';
    var k = 1024,
      dm = decimals <= 0 ? 0 : decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  showAlert(mensagem: string) {
    let disposable = this.dialogService.addDialog(AlertComponent, {
      title: 'Alerta',
      message: mensagem,
      exception: null
    })
      .subscribe((isConfirmed) => {
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

}
