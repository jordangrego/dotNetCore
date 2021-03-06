import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule, routingComponents } from "./app.routing";

import { BootstrapModalModule } from "ng6-bootstrap-modal";
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';
import { ChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from "./app.component";
import { PessoaComponent } from "./views/pessoa/pessoa.component";
import { LoginComponent } from "./views/login/login.component";
import { MainComponent } from "./views/main/main.component";
import { MenutopComponent } from "./views/menutop/menutop.component";

import { ConfirmComponent } from "./components/confirm/confirm.component";
import { AlertComponent } from "./components/alert/alert.component";
import { FooterComponent } from "./views/footer/footer.component";
import { ClienteComponent } from "./views/cliente/cliente.component";
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { CadastroClienteComponent } from './views/cliente/cadastro-cliente/cadastro-cliente.component';
import { EnderecoComponent } from './views/cliente/cadastro-cliente/endereco/endereco.component';
import { TelefoneComponent } from './views/cliente/cadastro-cliente/telefone/telefone.component';
import { SelectComponent } from './select/select.component';
import { UploadFileComponent } from './views/upload-file/upload-file.component';
import { ChartComponent } from './views/chart/chart.component';
import { ToastComponent } from './views/toast/toast.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { UsuariosComponent } from './views/admin/usuarios/usuarios.component';
import { CadastroUsuarioComponent } from './views/admin/usuarios/cadastro-usuario/cadastro-usuario.component';
import { HtmlEditorComponent } from './views/html-editor/html-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PessoaComponent,
    LoginComponent,
    MainComponent,
    MenutopComponent,
    ConfirmComponent,
    AlertComponent,
    FooterComponent,
    ClienteComponent,
    InputComponent,
    RadioComponent,
    CadastroClienteComponent,
    EnderecoComponent,
    TelefoneComponent,
    SelectComponent,
    UploadFileComponent,
    ChartComponent,
    ToastComponent,
    BreadcrumbComponent,
    UsuariosComponent,
    CadastroUsuarioComponent,
    HtmlEditorComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BootstrapModalModule,
    MomentModule,
    TextMaskModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularEditorModule
  ],
  providers: [],
  entryComponents: [ConfirmComponent, AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
