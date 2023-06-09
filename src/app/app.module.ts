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
import { NovoRegistroDialogComponent } from './components/dialogs/novo-registro-dialog/novo-registro-dialog.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { NgxMaskModule } from 'ngx-mask'
import { CalendarModule } from 'primeng/calendar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarModule } from 'primeng/sidebar';
import { InspecaoOperacionalComponent } from './pages/inspecoes/inspecao-operacional/inspecao-operacional.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { IncluirAnexoDialogComponent } from './components/dialogs/incluir-anexo-dialog/incluir-anexo-dialog.component';
import { IncluirElementDialogComponent } from './components/dialogs/incluir-element-dialog/incluir-element-dialog.component';
import { ListarInspecoesComponent } from './pages/inspecoes/listar-inspecoes/listar-inspecoes.component';
import { NovaInspecaoDialogComponent } from './components/dialogs/nova-inspecao-dialog/nova-inspecao-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IncluirUsuarioDialogComponent } from './components/dialogs/incluir-usuario-dialog/incluir-usuario-dialog.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { LocalidadesComponent } from './pages/localidades/localidades.component';
import { LocalidadeDialogComponent } from './components/dialogs/localidade-dialog/localidade-dialog.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBarComponent,
    HomeComponent,
    CadastrarEstruturaComponent,
    DetalharEstruturaComponent,
    ListarEstruturasComponent,
    InspecaoOperacionalComponent,
    NovoRegistroDialogComponent,
    IncluirAnexoDialogComponent,
    IncluirElementDialogComponent,
    ListarInspecoesComponent,
    NovaInspecaoDialogComponent,
    IncluirUsuarioDialogComponent,
    ConfirmDialogComponent,
    LocalidadesComponent,
    LocalidadeDialogComponent,
    ParametrosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot(),
    SidebarModule,
    DynamicDialogModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    RadioButtonModule,
    InputSwitchModule,
    OverlayPanelModule,
    FileUploadModule,
    FontAwesomeModule,
    AutoCompleteModule,
    ConfirmDialogModule,
  ],
  providers: [
    TranslateService,
    MessageService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
