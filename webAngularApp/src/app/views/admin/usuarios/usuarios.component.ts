import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng6-bootstrap-modal';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private dataUsuarios: UsuarioModel[];

  constructor(private usuarioService: UsuarioService,
    private dialogService:DialogService,
    private router: Router) { }

  ngOnInit() {
    this.recuperarUsuarios();
  }

  public recuperarUsuarios() : void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.dataUsuarios = data.data
    });
  };

  public excluirUsuario(usuario : UsuarioModel) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Excluir', 
        message:'Confirma excluir Usuário?' })
        .subscribe((isConfirmed)=>{
            if(isConfirmed) {
              this.usuarioService.deleteUsuario(usuario.idUsuario).subscribe(data => {
                this.recuperarUsuarios();
                this.showAlert('Usuário excluído com sucesso!');
              });
            }
        });
    setTimeout(()=>{
        disposable.unsubscribe();
    },30000);
  }

  editarUsuario(usuario : UsuarioModel) {
    this.router.navigate(["cadastro-usuario", usuario.idUsuario], {  skipLocationChange: true });
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
