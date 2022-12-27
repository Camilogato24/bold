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
    isCobroDatafono?: boolean;
    isCobroLink?: boolean;
    transactionLabel?: string;
}