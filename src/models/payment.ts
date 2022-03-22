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
  vaultedPaymentInstrument?: any;
  customer?: any;
  lastPaymentError?: any;
  declineReasons?: any;
  metadata?: any;
}

export const PaymentModelDefaults = {
  id: '',
  amount: 0,
  amountAuthorized: 0,
  amountCaptured: 0,
  amountRefunded: 0,
  currencyCode: '',
  date: '',
  orderId: '',
  paymentInstrument: {
    token: '',
    analyticsId: '',
    tokenType: '',
    paymentInstrumentType: '',
    paymentInstrumentData: {
      last4Digits: '',
      cardholderName: '',
      expirationMonth: '',
      expirationYear: '',
      network: '',
      binData: {
        network: ''
      }
    },
    threeDSecureAuthentication: {
      responseCode: ''
    }
  },
  processor: '',
  processorMerchantId: '',
  status: ''
};

export default PaymentModel;
