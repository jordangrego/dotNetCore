import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app.routing';

import { BootstrapModalModule } from 'ng6-bootstrap-modal';

import { AppComponent } from './app.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { MenutopComponent } from './views/menutop/menutop.component';

import { ConfirmComponent } from './components/confirm/confirm.component';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './views/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BootstrapModalModule//.forRoot({container:document.body})
  ],
  providers: [],
  entryComponents: [
    ConfirmComponent,
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
