import { ILocalidade } from "../interfaces/localidade";
import { IMaterial } from "../interfaces/material";
import { ISituacao } from "../interfaces/situacao";
import { ITipoAnexo } from "../interfaces/tipo-anexo";
import { ITipoEstrutura } from "../interfaces/tipo-estrutura";
import { IUF } from "../interfaces/uf";

export class Utils {
  static IUF: IUF[] = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];

  static tiposEstruturas: ITipoEstrutura[] = [
    { id: 1, nome: 'Adutora' },
    { id: 2, nome: 'Booster' },
    { id: 3, nome: 'Caixa de Areia' },
    { id: 4, nome: 'Canal' },
    { id: 5, nome: 'Casa das Bombas' },
    { id: 6, nome: 'Decantador' },
    { id: 7, nome: 'Decantador Primário' },
    { id: 8, nome: 'Decantador Secundário' },
    { id: 9, nome: 'Digestor' },
    { id: 10, nome: 'Estação de Tratamento de Água' },
    { id: 11, nome: 'Estação de Tratamento de Esgoto' },
    { id: 12, nome: 'Filtro' },
    { id: 13, nome: 'Floculador' },
    { id: 14, nome: 'Gasômetro' },
    { id: 15, nome: 'Interceptor de Esgoto' },
    { id: 16, nome: 'Poço de Visita' },
    { id: 17, nome: 'Poço de Esgoto (Úmido e Seco)' },
    { id: 18, nome: 'Reservatório' },
    { id: 19, nome: 'Tanque de Aereação' },
    { id: 20, nome: 'Tanque de Contato' },
    { id: 21, nome: 'Torre' },
  ];

  static materiais: IMaterial[] = [
    { id: 1, nome: 'Concreto' },
    { id: 2, nome: 'Alvenaria' },
    { id: 3, nome: 'Metálico' },
    { id: 4, nome: 'Fibra' },
    { id: 5, nome: 'Misto' },
  ];

  static situacoes: ISituacao[] = [
    { id: 1, nome: 'Enterrada' },
    { id: 2, nome: 'Semienterrada' },
    { id: 3, nome: 'Apoiada' },
    { id: 4, nome: 'Elevada' },
  ]

  static tiposAnexo: ITipoAnexo[] = [
    { id: 1, nome: 'Fotografias' },
    { id: 2, nome: 'Plantas' },
    { id: 3, nome: 'Documentos' },
  ];

  //Gere uma lista de localidades para ser usada como exemplo na interface ILocalidade
  static localidades: ILocalidade[] = [
    { id: 1, endereco: 'Rua E', cep: '55555-555', numero: '50', uf: { sigla: 'SP', nome: 'São Paulo' }, municipio: 'São Paulo', },
    { id: 2, endereco: 'Rua F', cep: '66666-666', numero: '60', uf: { sigla: 'SP', nome: 'São Paulo' }, municipio: 'Santos', },
    { id: 3, endereco: 'Rua G', cep: '77777-777', numero: '70', uf: { sigla: 'SP', nome: 'São Paulo' }, municipio: 'São Vicente', },
    { id: 4, endereco: 'Rua H', cep: '88888-888', numero: '80', uf: { sigla: 'SP', nome: 'São Paulo' }, municipio: 'Guarujá', },
    { id: 5, endereco: 'Rua I', cep: '99999-999', numero: '90', uf: { sigla: 'SP', nome: 'São Paulo' }, municipio: 'Praia Grande', },
  ]
}
