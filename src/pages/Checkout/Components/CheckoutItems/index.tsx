// CSS
import { CheckoutButton, CheckoutCart, CheckoutTotal } from './styles'
// imports
import {
  CoffeeItems,
  coffeePrice,
  priceToString,
  coffees,
} from './Components/CoffeeItems'

export function CheckoutItems() {
  return (
    <CheckoutCart>
      <CoffeeItems />
      <CheckoutTotal>
        {/* Total Item Cost */}
        <p>Total de Itens</p>
        <p>R$ {priceToString(coffeePrice)} </p>
        {/* Total Delivery Cost */}
        <p>Entrega</p>
        <p>R$ {priceToString(1.75 * coffees.length)}</p>
        {/* Total Overall Price */}
        <p className="bold">Total</p>
        <p className="bold">R$ {priceToString(coffeePrice + 3.5)}</p>
      </CheckoutTotal>
      <CheckoutButton>Confirmar Pedido</CheckoutButton>
    </CheckoutCart>
  )
}
