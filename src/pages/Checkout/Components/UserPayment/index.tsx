import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PurpleIcon } from '../../styles'
import { PaymentMethod } from './styles'

export function UserPayment() {
  return (
    <>
      <PaymentMethod>
        <button>
          <PurpleIcon>
            <CreditCard />
          </PurpleIcon>
          Cartão de Crédito
        </button>
        <button>
          <PurpleIcon>
            <Bank />
          </PurpleIcon>
          Cartão de Débito
        </button>
        <button>
          <PurpleIcon>
            <Money />
          </PurpleIcon>
          Dinheiro
        </button>
      </PaymentMethod>
    </>
  )
}
