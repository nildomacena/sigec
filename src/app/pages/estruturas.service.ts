import { Injectable } from '@angular/core';
import { IEstrutura } from '../interfaces/estrutura';

@Injectable({
  providedIn: 'root'
})
export class EstruturasService {
  estruturas: IEstrutura[] = [];
  constructor() {
    this.estruturas = [
      { id: 1234123, nome: 'Estrutura 1', municipio: 'Municipio 1', uf: 'SP' },
      { id: 1243514, nome: 'Estrutura 2', municipio: 'Municipio 2', uf: 'RJ' },
      { id: 3541343, nome: 'Estrutura 3', municipio: 'Municipio 3', uf: 'MG' },
      { id: 4125143, nome: 'Estrutura 4', municipio: 'Municipio 4', uf: 'SP' },
      { id: 51234123, nome: 'Estrutura 5', municipio: 'Municipio 5', uf: 'RJ' },
      { id: 61412312, nome: 'Estrutura 6', municipio: 'Municipio 6', uf: 'MG' },
      { id: 71412312, nome: 'Estrutura 7', municipio: 'Municipio 7', uf: 'SP' },
      { id: 81412312, nome: 'Estrutura 8', municipio: 'Municipio 8', uf: 'RJ' },
      { id: 91412312, nome: 'Estrutura 9', municipio: 'Municipio 9', uf: 'MG' },
      { id: 10123412, nome: 'Estrutura 10', municipio: 'Municipio 10', uf: 'SP' },
      { id: 11123412, nome: 'Estrutura 11', municipio: 'Municipio 11', uf: 'RJ' },
      { id: 12123412, nome: 'Estrutura 12', municipio: 'Municipio 12', uf: 'MG' },
      { id: 13123412, nome: 'Estrutura 13', municipio: 'Municipio 13', uf: 'SP' },
    ];
  }

  getEstruturas(): IEstrutura[] {
    return this.estruturas;
  }

  getEstrutura(id: number): IEstrutura | undefined {
    return this.estruturas.find(estrutura => estrutura.id === id);
  }
}
