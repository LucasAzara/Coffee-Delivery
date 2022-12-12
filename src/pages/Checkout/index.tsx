// Components
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { UserAddress } from './Components/UserAddress'
import { UserPayment } from './Components/UserPayment'
// CSS
import {
  CheckoutContainer,
  CheckoutTitle,
  ItemData,
  PurpleIcon,
  UserData,
  UserInformation,
  YellowIcon,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      {/* User Data for Delivery */}
      <UserData>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        {/* Address */}
        <UserInformation>
          <div>
            <YellowIcon>
              <MapPinLine size={22} />
            </YellowIcon>
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          {/* Form */}
          <UserAddress />
        </UserInformation>
        {/* Payment */}
        <UserInformation>
          <div>
            <PurpleIcon>
              <CurrencyDollar size={22} />
            </PurpleIcon>
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <UserPayment />
        </UserInformation>
      </UserData>
      {/* Coffee Data */}
      <ItemData>
        <CheckoutTitle>Café selecionados</CheckoutTitle>
      </ItemData>
    </CheckoutContainer>
  )
}
