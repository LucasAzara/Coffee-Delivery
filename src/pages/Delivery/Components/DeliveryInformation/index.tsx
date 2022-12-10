import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryBorder,
  DeliveryInfo,
  DeliveryInfoContainer,
  LocationIcon,
  MoneyIcon,
  TimeIcon,
} from './styles'

interface IDelivery {
  location: {
    street: string
    number: number | 'S/N'
    sector: string
    city: string
    state: string
  }
  timeEstimation: number[]
  paymentMethod: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

export function DeliveryInformation() {
  // Mock Data
  const deliveryData: IDelivery = {
    location: {
      street: 'Rua Jão Daniel Martinelli',
      number: 102,
      sector: 'Farrapos',
      city: 'Porto Alegre',
      state: 'RS',
    },
    timeEstimation: [20, 30],
    paymentMethod: 'Cartão de Crédito',
  }

  return (
    // Div with linear-gradient background to act as linear border
    <DeliveryBorder>
      {/* Actual Container */}
      <DeliveryInfoContainer>
        {/* Location */}
        <DeliveryInfo>
          <LocationIcon>
            <MapPin weight="fill" />
          </LocationIcon>
          <div>
            <p>
              Entrega em <b>{StreetLocation(deliveryData)}</b>
            </p>
            <p>{CityLocation(deliveryData)}</p>
          </div>
        </DeliveryInfo>
        {/* Time */}
        <DeliveryInfo>
          <TimeIcon>
            <Timer weight="fill" />
          </TimeIcon>
          <div>
            <p>Previsão de entrega</p>
            <p>
              <b>{EstimatedTime(deliveryData)}</b>
            </p>
          </div>
        </DeliveryInfo>
        {/* Payment */}
        <DeliveryInfo>
          <MoneyIcon>
            <CurrencyDollar />
          </MoneyIcon>
          <div>
            <p>Pagamento na entrega</p>
            <p>
              <b>{deliveryData.paymentMethod}</b>
            </p>
          </div>
        </DeliveryInfo>
      </DeliveryInfoContainer>
    </DeliveryBorder>
  )
}

// String Functions to fill out info

const StreetLocation = ({ location }: IDelivery) => {
  return `${location.street}, ${location.number}`
}
const CityLocation = ({ location }: IDelivery) => {
  return `${location.sector} - ${location.city}, ${location.state}`
}
const EstimatedTime = ({ timeEstimation }: IDelivery) => {
  return `${timeEstimation.at(0)} min - ${timeEstimation.at(-1)} min`
}
