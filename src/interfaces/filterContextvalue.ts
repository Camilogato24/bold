  export interface DataState {
    dataPay: Pay[];
    filtered: boolean;
  }

  export interface Pay {
    id: number
    transaction: string;
    date: string;
    payMethod: string;
    transactionId: string;
    amount: number;
    deductionBold: number;
    cobro: string;
    transactionLabel?: string;
}

export interface CategorysInterfaces {
  name: string;
  value: string;
  state: boolean,
}