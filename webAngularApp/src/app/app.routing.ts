import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./views/main/main.component";
import { LoginComponent } from "./views/login/login.component";
import { PessoaComponent } from "./views/pessoa/pessoa.component";
import { ClienteComponent } from "./views/cliente/cliente.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "index", component: LoginComponent },
  { path: "home", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "login", component: LoginComponent },
  { path: "app", component: AppComponent },
  { path: "pessoa", component: PessoaComponent },
  { path: "cliente", component: ClienteComponent }
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
