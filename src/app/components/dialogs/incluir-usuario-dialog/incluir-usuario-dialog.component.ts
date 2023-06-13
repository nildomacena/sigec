import { Component } from '@angular/core';

@Component({
  selector: 'app-incluir-usuario-dialog',
  templateUrl: './incluir-usuario-dialog.component.html',
  styleUrls: ['./incluir-usuario-dialog.component.scss']
})
export class IncluirUsuarioDialogComponent {
  usuarioSelecionado?: string;
  usuarios = [
    'João da Silva',
    'Maria da Silva',
    'José da Silva',
    'Joana da Silva',
  ];
  perfis = [
    'Inspetor',
    'Aprovador',
  ]
  perfilSelecionado?: string;
  usuariosCadastrados = [
    { nome: 'Nome e Sobrenome do Usuário 01', perfil: 'Inspetor' },
    { nome: 'Nome e Sobrenome do Usuário 02', perfil: 'Aprovador' },
    { nome: 'Nome e Sobrenome do Usuário 03', perfil: 'Inspetor' },
    { nome: 'Nome e Sobrenome do Usuário 04', perfil: 'Aprovador' },
  ];
  suggestions: any[];

  constructor() {
    this.suggestions = this.usuarios;
  }

  cadastrarUsuario() {
    console.log(this.perfilSelecionado);
    if (!this.usuarioSelecionado || !this.perfilSelecionado) return;
    this.usuariosCadastrados.push({ 'nome': this.usuarioSelecionado, 'perfil': this.perfilSelecionado });
    this.usuarioSelecionado = undefined;
    this.perfilSelecionado = undefined;
  }

  excluirUsuarioCadastrado(usuario: any) {
    this.usuariosCadastrados = this.usuariosCadastrados.filter((usuarioCadastrado) => { return usuarioCadastrado.nome != usuario.nome });
  }

  search(event: any) {
    this.suggestions = this.usuarios.filter((usuario) => { return usuario.toLowerCase().includes(event.query.toLowerCase()) });
    console.log(event);
  }
}
