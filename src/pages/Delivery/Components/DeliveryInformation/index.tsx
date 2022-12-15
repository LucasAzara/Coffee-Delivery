import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CoffeeContext } from '../../../../context/DeliveryData'
import { IAddress } from '../../../../reducers/cart/action'
import {
  DeliveryBorder,
  DeliveryInfo,
  DeliveryInfoContainer,
  LocationIcon,
  MoneyIcon,
  TimeIcon,
} from './styles'

export function DeliveryInformation() {
  const { handleResetAction } = useContext(CoffeeContext)

  // Get Address and PaymentMethod from location
  const { state } = useLocation()

  // Reset Context on Load
  handleResetAction()

  // Mock Data
  const deliveryData = {
    timeEstimation: [20, 30],
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
              Entrega em <b>{StreetLocation(state.address)}</b>
            </p>
            <p>{CityLocation(state.address)}</p>
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
              <b>{EstimatedTime(deliveryData.timeEstimation)}</b>
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
              <b>{state.paymentMethod}</b>
            </p>
          </div>
        </DeliveryInfo>
      </DeliveryInfoContainer>
    </DeliveryBorder>
  )
}

// String Functions to fill out info

const StreetLocation = (address: IAddress) => {
  return `${address.streetName}, ${address.streetNumber}`
}
const CityLocation = (address: IAddress) => {
  return `${address.sector} - ${address.city}, ${address.state}`
}
const EstimatedTime = (timeEstimation: Array<number>) => {
  return `${timeEstimation.at(0)} min - ${timeEstimation.at(-1)} min`
}
