import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'ng6-bootstrap-modal';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuarioModel';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  private usuario: UsuarioModel;
  public usuarioForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();
    this.usuario.nome = 'b';
    this.usuario.username = '';
    this.usuario.email = '';

    this.usuarioForm = this.formBuilder.group({
      nome: this.formBuilder.control(this.usuario.nome),
      email: this.formBuilder.control(this.usuario.email),
      username: this.formBuilder.control(this.usuario.username),
      // password: this.formBuilder.control('', [
      //   Validators.required,
      //   Validators.minLength(1)
      // ]),
      // consfirm: this.formBuilder.control('', [
      //   Validators.required,
      //   Validators.minLength(1)
      // ]),
    });


    let idUsuario: string = '';
    if (
      this.activatedRoute.snapshot.paramMap.get('id') != null &&
      this.activatedRoute.snapshot.paramMap.get('id') != undefined
    ) {
      idUsuario = this.activatedRoute.snapshot.paramMap.get('id');

      this.usuarioService.getUsuario(idUsuario).subscribe(data => {
        this.usuario = data.data;
      });
    }
  }

}
