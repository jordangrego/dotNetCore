import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';

/* imports das telas de exemplo, remover após copiar
import { DatatableComponent } from './views/exemplos/datatable/datatable.component';
import { ModalsPadraoComponent } from './views/exemplos/modalsPadrao/modalsPadrao.component';
import { PesquisaFormComponent } from './views/exemplos/forms/pesquisaForm/pesquisaForm.component';
import { CadastroFormComponent } from './views/exemplos/forms/cadastroForm/cadastroForm.component';
import { TelaModalsCustomComponent } from './views/exemplos/customControls/telaModalsCustom.component';
*/

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'index', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: 'pessoa', component: PessoaComponent },

  /* telas abaixo são exemplo, remover após copiar
  { path: 'datatable', component: DatatableComponent },
  { path: 'modalsPadrao', component: ModalsPadraoComponent },
  { path: 'pesquisaForm', component: PesquisaFormComponent },
  { path: 'cadastroForm', component: CadastroFormComponent },
  { path: 'cadastroForm/:idUsuario', component: CadastroFormComponent },
  { path: 'telaModalsCustom', component: TelaModalsCustomComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  AppComponent,
  LoginComponent,
  PessoaComponent,

  /* telas abaixo são exemplo, remover após copiar
  DatatableComponent,
  ModalsPadraoComponent,
  PesquisaFormComponent,
  CadastroFormComponent,*/
];
