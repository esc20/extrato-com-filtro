import { Routes } from '@angular/router';
import { ExtratoComponent } from './pages/extrato/extrato.component';

export const routes: Routes = [
  // Quando o caminho for vazio (página inicial), carrega o Extrato
  { path: '', component: ExtratoComponent },
  
  // Rota de segurança: se o usuário digitar qualquer coisa errada, volta para o início
  { path: '**', redirectTo: '' }
];
