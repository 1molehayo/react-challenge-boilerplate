import React from 'react';
import { ReactComponent as ThreeDs } from 'assets/3DS.svg';
import { ReactComponent as Adyen } from 'assets/adyen.svg';
import { ReactComponent as Amex } from 'assets/amex.svg';
import { ReactComponent as AngleRight } from 'assets/angle-right.svg';
import { ReactComponent as ApplePay } from 'assets/apple-pay.svg';
import { ReactComponent as Braintree } from 'assets/braintree.svg';
import { ReactComponent as DirectDebit } from 'assets/direct-debit.svg';
import { ReactComponent as Discovery } from 'assets/discovery.svg';
import { ReactComponent as Gocardless } from 'assets/gocardless.svg';
import { ReactComponent as GooglePay } from 'assets/google-pay.svg';
import { ReactComponent as Jcb } from 'assets/jcb.svg';
import { ReactComponent as Klarna } from 'assets/klarna.svg';
import { ReactComponent as Mastercard } from 'assets/mastercard.svg';
import { ReactComponent as PaymentCard } from 'assets/payment-card.svg';
import { ReactComponent as Paypal } from 'assets/paypal.svg';
import { ReactComponent as Primer } from 'assets/primer.svg';
import { ReactComponent as Ravelin } from 'assets/ravelin.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Sift } from 'assets/sift.svg';
import { ReactComponent as Stripe } from 'assets/stripe.svg';
import { ReactComponent as Visa } from 'assets/visa.svg';

interface IconProps {
  color?: string;
  icon: string;
  size?: string;
  style?: object;
}

const Icon: React.FC<IconProps> = ({ color, icon, size, style }) => {
  if (icon === '3ds') {
    return <ThreeDs width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'adyen') {
    return <Adyen width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'american-express') {
    return <Amex width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'angle-right') {
    return (
      <AngleRight width={size} height={size} color={color} style={style} />
    );
  }

  if (icon === 'apple-pay') {
    return <ApplePay width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'braintree') {
    return <Braintree width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'direct-debit') {
    return (
      <DirectDebit width={size} height={size} color={color} style={style} />
    );
  }

  if (icon === 'discovery') {
    return <Discovery width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'gocardless') {
    return (
      <Gocardless width={size} height={size} color={color} style={style} />
    );
  }

  if (icon === 'google-pay') {
    return <GooglePay width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'jcb') {
    return <Jcb width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'klarna') {
    return <Klarna width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'mastercard') {
    return (
      <Mastercard width={size} height={size} color={color} style={style} />
    );
  }

  if (icon === 'payment-card') {
    return (
      <PaymentCard width={size} height={size} color={color} style={style} />
    );
  }

  if (icon === 'paypal') {
    return <Paypal width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'primer') {
    return <Primer width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'ravelin') {
    return <Ravelin width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'search') {
    return <Search width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'sift') {
    return <Sift width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'stripe') {
    return <Stripe width={size} height={size} color={color} style={style} />;
  }

  if (icon === 'visa') {
    return <Visa width={size} height={size} color={color} style={style} />;
  }

  return null;
};

Icon.defaultProps = {
  color: '',
  icon: '',
  size: '24px',
  style: {
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

export default Icon;
