import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app.routing';

import { AppComponent } from './app.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { MenutopComponent } from './views/menutop/menutop.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PessoaComponent,
    LoginComponent,
    MainComponent,
    MenutopComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
