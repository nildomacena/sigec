import { IUF } from "./uf";

export interface ILocalidade {
  id: number;
  endereco: string;
  cep: string;
  numero: string;
  uf: IUF;
  municipio: string;
}
