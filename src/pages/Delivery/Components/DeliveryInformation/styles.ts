import styled from 'styled-components'

// Info Containers ----------------------------------------------------
const DeliveryInfoBase = styled.div`
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
`

export const DeliveryBorder = styled(DeliveryInfoBase)`
  background: linear-gradient(
    145deg,
    ${(props) => props.theme['yellow-500']} 0%,
    ${(props) => props.theme['purple-500']} 100%
  );

  padding: 2px;
`

export const DeliveryInfoContainer = styled(DeliveryInfoBase)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 40px;

  background-color: ${(props) => props.theme.white};
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  div {
    flex-direction: column;
  }
`

// Info

const DeliveryIcons = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
`

export const LocationIcon = styled(DeliveryIcons)`
  background-color: ${(props) => props.theme['purple-500']};
`
export const TimeIcon = styled(DeliveryIcons)`
  background-color: ${(props) => props.theme['yellow-500']};
`
export const MoneyIcon = styled(DeliveryIcons)`
  background-color: ${(props) => props.theme['yellow-700']};
`
