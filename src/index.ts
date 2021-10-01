import { IDriver } from './drivers/DriverBase';

type DriverType = 'idpay' | 'zarinpal';

interface IConfig {
  sandbox?: boolean;
}

interface ICreatePayment {
  amount: number;
  callback: string;
  orderId?: string;
  name?: string;
  phone?: string;
  mail?: string;
  description?: string;
}

interface IVerifyPayment {
  transactionId: string;
  orderId?: string;
  amount?: number;
}

export default class PaymentGateway {
  private apiKey: string;
  private driver: IDriver;
  private driverName: DriverType;
  private config: IConfig;

  constructor(apiKey: string, driver: DriverType, config: { sandbox: false }) {
    this.apiKey = apiKey;
    this.driverName = driver;
    switch (driver) {
      default:
        throw new Error(`payment service ${driver} not supported`);
    }
    this.config = config;
  }

  createPayment(param: ICreatePayment) {
    if (typeof param.amount !== 'number' || param.amount < 1000) {
      throw new Error('amount must be a number and equal/greater than 1000');
    } else if (
      typeof param.callback !== 'string' ||
      param.callback.length < 5
    ) {
      throw new Error('Callback (redirect) URL must be a string.');
    } else if (param.callback.slice(0, 4) !== 'http') {
      throw new Error('Callback URL must start with http/https');
    }
  }

  verifyPayment(param: IVerifyPayment) {
    if (!param.transactionId) {
      throw new Error('transactionId is required');
    }
  }
}
