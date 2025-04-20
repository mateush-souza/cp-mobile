export interface Transacao {
  id: number;
  valor: number;
  data: string;
  descricao: string;
  categoria: string;
  tipo: string;
  contraparte: {
    apelido: string;
    nome: string;
  };
}

export interface SaldoResponse {
  saldo: number;
}

export interface TransferResponse {
  mensagem: string;
  id: string;
}

export interface UserInfo {
  id: string;
  nome: string;
  apelido: string;
  documento: string;
}

export type RootStackParamList = {
  TransferDetails: {
    Transfer: {
      id: number;
      valor: number;
      data: string;
      descricao: string;
      categoria: string;
      tipo: string;
      contraparte: {
        apelido: string;
        nome: string;
      };
    };
  };
};

type TransferDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransferDetails'
>;

type TransferDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'TransferDetails'
>;

type Props = {
  navigation: TransferDetailsScreenNavigationProp;
  route: TransferDetailsScreenRouteProp;
};