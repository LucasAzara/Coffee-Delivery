import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { IPayment } from '../../../../reducers/cart/action'

import { PurpleIcon } from '../../styles'
import { PaymentMethod } from './styles'

interface IUserPayment {
  handlePaymentMethod: (payment: IPayment) => void
}

export function UserPayment({ handlePaymentMethod }: IUserPayment) {
  // Set Payment Method
  const paymentMethod = (e: any) => {
    e.preventDefault()
    const payment = e.target.getAttribute('data-name')
    handlePaymentMethod(payment)
  }

  return (
    <>
      <PaymentMethod>
        <button data-name="Credit" onClick={paymentMethod}>
          <PurpleIcon>
            <CreditCard />
          </PurpleIcon>
          Cartão de Crédito
        </button>
        <button data-name="Debit" onClick={paymentMethod}>
          <PurpleIcon>
            <Bank />
          </PurpleIcon>
          Cartão de Débito
        </button>
        <button data-name="Dinheiro" onClick={paymentMethod}>
          <PurpleIcon>
            <Money />
          </PurpleIcon>
          Dinheiro
        </button>
      </PaymentMethod>
    </>
  )
}
