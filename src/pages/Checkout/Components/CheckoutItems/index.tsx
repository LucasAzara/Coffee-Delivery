// CSS
import { CheckoutButton, CheckoutCart, CheckoutTotal } from './styles'
// imports
import { CoffeeItems, priceToString } from './Components/CoffeeItems'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../context/DeliveryData'
import Swal from 'sweetalert2'

export function CheckoutItems() {
  // Context
  const { coffeeItems } = useContext(CoffeeContext)

  // Variables for Coffee in Cart

  const coffeePrice = coffeeItems.reduce((acc, coffee) => {
    if (coffee.checkout) return coffee.price * coffee.quantity + acc
    return acc
  }, 0)

  const coffeeLength = coffeeItems.filter((item) => item.checkout).length

  return (
    <CheckoutCart>
      <CoffeeItems />
      <CheckoutTotal>
        {/* Total Item Cost */}
        <p>Total de Itens</p>
        <p>R$ {priceToString(coffeePrice)} </p>
        {/* Total Delivery Cost */}
        <p>Entrega</p>
        <p>R$ {priceToString(1.75 * coffeeLength)}</p>
        {/* Total Overall Price */}
        <p className="bold">Total</p>
        <p className="bold">
          R$ {priceToString(coffeePrice + coffeeLength === 0 ? 0 : 3.5)}
        </p>
      </CheckoutTotal>
      <CheckoutButton type="submit">Confirmar Pedido</CheckoutButton>
    </CheckoutCart>
  )
}
