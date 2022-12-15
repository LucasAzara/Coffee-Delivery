// CSS
import { DeliveryContainer, DeliveryTitle } from './styles'
// Image
import DeliveryGuy from '../../assets/Delivery.svg'
// Import
import { DeliveryInformation } from './Components/DeliveryInformation'

export function Delivery() {
  return (
    <DeliveryContainer>
      <div>
        {/* Title */}
        <Title />
        {/* Info */}
        <DeliveryInformation />
      </div>
      {/* Image */}
      <img src={DeliveryGuy} alt="Man Delivering Order" />
    </DeliveryContainer>
  )
}

const Title = () => {
  return (
    <DeliveryTitle>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
    </DeliveryTitle>
  )
}
