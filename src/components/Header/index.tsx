// CSS
import { HeadingContainer, Cart, Location, ButtonContainer } from './styles'
import { NavLink } from 'react-router-dom'
// Image
import Logo from '../../assets/Logo/CoffeeDelivery.svg'
// Icons
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
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
        <Cart>
          <NavLink to="/checkout">
            <ShoppingCart weight="fill" />
          </NavLink>
        </Cart>
      </ButtonContainer>
    </HeadingContainer>
  )
}
