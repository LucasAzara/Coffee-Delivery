import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../../../context/DeliveryData'
// Icons
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
// CSS
import {
  CoffeeCheckoutButton,
  CoffeeList,
  CoffeeQuantity,
  CoffeeShop,
  CoffeeTitle,
  CoffeInfo,
} from './styles'
// Alert
import Swal from 'sweetalert2'

export function Coffees() {
  // Context
  const { coffeeItems, handleAddCoffee, handleSubCoffee, handleUpdateCart } =
    useContext(CoffeeContext)

  // DeployActions
  const subCoffee = (e: any) => {
    const coffeeId = e.target.closest('li').getAttribute('data-key')
    handleSubCoffee(coffeeId)
  }

  const addCoffee = (e: any) => {
    const coffeeId = e.target.closest('li').getAttribute('data-key')
    handleAddCoffee(coffeeId)
  }

  const addCart = (e: any) => {
    const coffeeId = e.target.closest('li').getAttribute('data-key')
    handleUpdateCart(coffeeId)
    // Alert
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sucessfully added to cart',
      showConfirmButton: false,
      timer: 1000,
    })
  }

  return (
    <div>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>
      <CoffeeList>
        {coffeeItems.map((coffee) => {
          return (
            <li key={coffee.id} data-key={coffee.id}>
              {/* Preview Image */}
              <img src={coffee.preview} alt={`${coffee.title}in a cup`} />
              <CoffeInfo>
                {/* Tags */}
                <div>
                  {coffee.tags.map((tag, index) => {
                    return (
                      <span key={`${tag}${index}`}>{tag.toUpperCase()}</span>
                    )
                  })}
                </div>
                {/* Title & Description */}
                <div>
                  <h3>{coffee.title}</h3>
                  <p>{coffee.description}</p>
                </div>
              </CoffeInfo>
              <CoffeeShop>
                {/* Price */}
                <p>
                  R$
                  <span>
                    {coffee.price.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </p>
                {/* Cart / Quantity */}
                <div>
                  <CoffeeQuantity>
                    <button
                      onClick={subCoffee}
                      disabled={coffee.quantity === 0}
                    >
                      <Minus />
                    </button>
                    {coffee.quantity}
                    <button
                      onClick={addCoffee}
                      disabled={coffee.quantity >= 10}
                    >
                      <Plus />
                    </button>
                  </CoffeeQuantity>
                  <CoffeeCheckoutButton
                    onClick={addCart}
                    disabled={coffee.quantity === 0}
                  >
                    <ShoppingCart weight="fill" />
                  </CoffeeCheckoutButton>
                </div>
              </CoffeeShop>
            </li>
          )
        })}
      </CoffeeList>
    </div>
  )
}
