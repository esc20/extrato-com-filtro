// Define os tipos permitidos para evitar erros de digitação
export type TipoTransacao = 'ENTRADA' | 'SAIDA';
export type CategoriaTransacao = 'PIX' | 'CARTAO' | 'BOLETO' | 'TRANSFERENCIA';

export interface Transacao {
  id: string;
  data: string;       // Formato ISO: '2024-05-20'
  descricao: string;
  valor: number;
  categoria: CategoriaTransacao;
  tipo: TipoTransacao;
  icone: string;      // Ex: '💰', '🛒', '💡'
}
