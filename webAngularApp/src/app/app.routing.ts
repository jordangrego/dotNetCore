import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./views/main/main.component";
import { LoginComponent } from "./views/login/login.component";
import { PessoaComponent } from "./views/pessoa/pessoa.component";
import { ClienteComponent } from "./views/cliente/cliente.component";
import { CadastroClienteComponent } from "./views/cliente/cadastro-cliente/cadastro-cliente.component";
import { UploadFileComponent } from "./views/upload-file/upload-file.component";
import { ChartComponent } from "./views/chart/chart.component";
import { ToastComponent } from "./views/toast/toast.component";
import { UsuariosComponent } from "./views/admin/usuarios/usuarios.component";
import { CadastroUsuarioComponent } from "./views/admin/usuarios/cadastro-usuario/cadastro-usuario.component";
import { HtmlEditorComponent } from "./views/html-editor/html-editor.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "index", component: LoginComponent },
  { path: "home", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "login", component: LoginComponent },
  { path: "app", component: AppComponent },
  { path: "pessoa", component: PessoaComponent },
  { path: "cliente", component: ClienteComponent },
  { path: "cadastro-cliente", component: CadastroClienteComponent },
  { path: "cadastro-cliente/:id", component: CadastroClienteComponent },
  { path: "upload-files", component: UploadFileComponent },
  { path: "chart", component: ChartComponent },
  { path: "toast", component: ToastComponent },
  { path: "usuario", component: UsuariosComponent },
  { path: "cadastro-usuario", component: CadastroUsuarioComponent },
  { path: "cadastro-usuario/:id", component: CadastroUsuarioComponent },
  { path: "html-editor", component: HtmlEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  AppComponent,
  LoginComponent,
  PessoaComponent,
  ClienteComponent
];
