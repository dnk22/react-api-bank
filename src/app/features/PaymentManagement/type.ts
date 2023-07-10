export type SearchFormProps = {
  bankName: string;
  type: number;
};
export type TPayment = {
  balance: number;
  bankName: string;
  bankNumberAccount: string;
  bankUserName: string;
  callbackUrl: string;
  created_at: Date;
  id: number;
  isProxy: boolean;
  isQueue: boolean;
  isWorking: boolean;
  proxy: string;
};
