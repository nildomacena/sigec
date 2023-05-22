import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { CadastrarEstruturaComponent } from './pages/estruturas/cadastrar-estrutura/cadastrar-estrutura.component';
import { DetalharEstruturaComponent } from './pages/estruturas/detalhar-estrutura/detalhar-estrutura.component';
import { ListarEstruturasComponent } from './pages/estruturas/listar-estruturas/listar-estruturas.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { NgxMaskModule } from 'ngx-mask'
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBarComponent,
    HomeComponent,
    CadastrarEstruturaComponent,
    DetalharEstruturaComponent,
    ListarEstruturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    TableModule,
    MenubarModule,
    TabViewModule,
    InputTextModule,
    CalendarModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
