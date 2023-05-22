import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarEstruturaComponent } from './pages/estruturas/cadastrar-estrutura/cadastrar-estrutura.component';
import { DetalharEstruturaComponent } from './pages/estruturas/detalhar-estrutura/detalhar-estrutura.component';
import { ListarEstruturasComponent } from './pages/estruturas/listar-estruturas/listar-estruturas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'estruturas', component: ListarEstruturasComponent },
  { path: 'cadastrar-estrutura', component: CadastrarEstruturaComponent },
  { path: 'detalhar-estrutura/:estruturaId', component: DetalharEstruturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
