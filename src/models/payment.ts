interface PaymentInstrument {
  token: string;
  analyticsId: string;
  tokenType: string;
  paymentInstrumentType: string;
  paymentInstrumentData: any;
  threeDSecureAuthentication: any;
}

interface PaymentModel {
  id: string;
  date: string;
  status: string;
  orderId: string;
  processor: string;
  processorMerchantId: string;
  currencyCode: string;
  amount: number;
  amountAuthorized: number;
  amountCaptured: number;
  amountRefunded: number;
  requiredAction?: string;
  statementDescriptor?: string;
  paymentInstrument: PaymentInstrument;
  vaultedPaymentInstrument: any;
  customer: any;
  lastPaymentError: any;
  declineReasons: any;
  metadata: any;
}

export default PaymentModel;
