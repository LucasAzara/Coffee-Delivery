import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
// Title --------------------------------------------------------------
export const DeliveryTitle = styled.div`
  margin-bottom: 40px;
  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-700']};
    line-height: 42px;
  }
  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-700']};
  }
`
