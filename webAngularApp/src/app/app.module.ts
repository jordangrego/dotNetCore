import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule, routingComponents } from "./app.routing";

import { BootstrapModalModule } from "ng6-bootstrap-modal";
import { MomentModule } from 'angular2-moment';
import { TextMaskModule } from 'angular2-text-mask';
import { ChartsModule } from 'ng2-charts';

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
    ChartComponent    
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
    ChartsModule
  ],
  providers: [],
  entryComponents: [ConfirmComponent, AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
