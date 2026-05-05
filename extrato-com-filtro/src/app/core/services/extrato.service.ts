import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from '../models/transacao.model'; // Importando seu modelo

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  // Injeção moderna (Padrão Sênior)
  private readonly _http = inject(HttpClient);
  
  // Caminho do seu JSON de teste
  private readonly _jsonURL = 'data/extrato.json'; 

  // Método para buscar os dados
  getTransacoes(): Observable<Transacao[]> {
    return this._http.get<Transacao[]>(this._jsonURL);
  }
}
