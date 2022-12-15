// CSS
import { HeadingContainer, Cart, Location, ButtonContainer } from './styles'
import { NavLink } from 'react-router-dom'
// Image
import Logo from '../../assets/Logo/CoffeeDelivery.svg'
// Icons
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/DeliveryData'

export function Header() {
  const { totalItems } = useContext(CoffeeContext)

  return (
    <HeadingContainer>
      <NavLink to="/">
        <img
          src={Logo}
          alt="Coffe Cup with Rocket with Website name Coffee Delivery"
        />
      </NavLink>
      <ButtonContainer>
        <Location>
          <MapPin weight="fill" />
          <p>Goiânia, GO</p>
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart weight="fill" />
            {totalItems !== 0 ? <span>{totalItems}</span> : ''}
          </Cart>
        </NavLink>
      </ButtonContainer>
    </HeadingContainer>
  )
}
