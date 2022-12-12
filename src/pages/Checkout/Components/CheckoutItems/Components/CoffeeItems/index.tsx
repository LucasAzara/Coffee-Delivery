// Images
import Expresso from '../../../../../../assets/Coffees/ExpressoTradicional.svg'
import Latte from '../../../../../../assets/Coffees/Latte.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CheckoutCoffee, CoffeeCheckoutQuantity, CoffeeDelete } from './styles'

// Interface
interface CoffeeCheckout {
  id: string
  title: string
  price: number
  quantity: number
  coffeePreview: string
}

// Mock Data
export const coffees: CoffeeCheckout[] = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    price: 9.9,
    quantity: 1,
    coffeePreview: Expresso,
  },
  {
    id: '2',
    title: 'Latte',
    price: 9.9,
    quantity: 1,
    coffeePreview: Latte,
  },
]

export const coffeePrice: number = coffees.reduce((acumulador, coffee) => {
  return coffee.price * coffee.quantity + acumulador
}, 0)

export const priceToString = (price: number) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}

export function CoffeeItems() {
  return (
    <>
      {coffees.map((coffee) => {
        return (
          <CheckoutCoffee key={coffee.id}>
            {/* Img */}
            <img src={coffee.coffeePreview} alt={`Cup of ${coffee.title}`} />
            {/* Info */}
            <div className="coffeeInfo">
              {/* Title */}
              <p>{coffee.title}</p>
              {/* Quantity and Delete Button */}
              <div className="coffeeOptions">
                {/* Quantity */}
                <CoffeeCheckoutQuantity>
                  <button>
                    <Minus />
                  </button>
                  {coffee.quantity}
                  <button>
                    <Plus />
                  </button>
                </CoffeeCheckoutQuantity>
                {/* Delete */}
                <CoffeeDelete>
                  <button>
                    <Trash />
                  </button>
                </CoffeeDelete>
              </div>
            </div>
            {/* Price */}
            <p className="price">R$ {priceToString(coffee.price)}</p>
          </CheckoutCoffee>
        )
      })}
    </>
  )
}
