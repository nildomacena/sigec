import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarEstruturaComponent } from './pages/estruturas/cadastrar-estrutura/cadastrar-estrutura.component';
import { DetalharEstruturaComponent } from './pages/estruturas/detalhar-estrutura/detalhar-estrutura.component';
import { ListarEstruturasComponent } from './pages/estruturas/listar-estruturas/listar-estruturas.component';
import { InspecaoOperacionalComponent } from './pages/inspecoes/inspecao-operacional/inspecao-operacional.component';
import { ListarInspecoesComponent } from './pages/inspecoes/listar-inspecoes/listar-inspecoes.component';
import { LocalidadesComponent } from './pages/localidades/localidades.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'estruturas', component: ListarEstruturasComponent },
  { path: 'cadastrar-estrutura', component: CadastrarEstruturaComponent },
  { path: 'detalhar-estrutura/:estruturaId', component: DetalharEstruturaComponent },
  { path: 'cadastrar-inspecao-op/:estruturaId', component: InspecaoOperacionalComponent },
  { path: 'listar-inspecoes/:estruturaId', component: ListarInspecoesComponent },
  { path: 'localidades', component: LocalidadesComponent },
  { path: 'parametros', component: ParametrosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
