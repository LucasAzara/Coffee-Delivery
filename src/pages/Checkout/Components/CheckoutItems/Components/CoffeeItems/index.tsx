// Images
import Expresso from '../../../../../../assets/Coffees/ExpressoTradicional.svg'
import Latte from '../../../../../../assets/Coffees/Latte.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CheckoutCoffee, CoffeeCheckoutQuantity, CoffeeDelete } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../../../context/DeliveryData'

export function CoffeeItems() {
  // Context
  const { coffeeItems, handleAddCoffee, handleSubCoffee, handleDeleteCoffee } =
    useContext(CoffeeContext)

  // List of Coffee in Cart

  const coffees = coffeeItems.filter((item) => item.checkout)

  // Get Coffee ID

  const getCoffeeId = (e: any) => {
    return e.target.closest('.key').getAttribute('data-key')
  }

  // Context Actions

  const addCoffee = (e: any) => {
    const coffeeId = getCoffeeId(e)
    handleAddCoffee(coffeeId, true)
  }

  const subCoffee = (e: any) => {
    const coffeeId = getCoffeeId(e)
    handleSubCoffee(coffeeId, true)
  }

  const deleteCoffee = (e: any) => {
    const coffeeId = getCoffeeId(e)
    handleDeleteCoffee(coffeeId)
  }

  return (
    <>
      {coffees.map((coffee) => {
        return (
          <CheckoutCoffee className="key" key={coffee.id} data-key={coffee.id}>
            {/* Img */}
            <img src={coffee.preview} alt={`Cup of ${coffee.title}`} />
            {/* Info */}
            <div className="coffeeInfo">
              {/* Title */}
              <p>{coffee.title}</p>
              {/* Quantity and Delete Button */}
              <div className="coffeeOptions">
                {/* Quantity */}
                <CoffeeCheckoutQuantity>
                  <button onClick={subCoffee} disabled={coffee.quantity <= 1}>
                    <Minus />
                  </button>
                  {coffee.quantity}
                  <button onClick={addCoffee} disabled={coffee.quantity >= 10}>
                    <Plus />
                  </button>
                </CoffeeCheckoutQuantity>
                {/* Delete */}
                <CoffeeDelete>
                  <button onClick={deleteCoffee}>
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

export const priceToString = (price: number) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
