import styled from 'styled-components'

// Main Container
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const CheckoutTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`

// User Data

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export const UserInformation = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 40px;

  & div:first-child {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.25rem;
      color: ${(props) => props.theme['gray-700']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }
  }
`

// Coffee Data

export const ItemData = styled.div``

// Icons

export const CheckoutIconBase = styled.span`
  display: flex;
  justify-content: center;
`

export const PurpleIcon = styled(CheckoutIconBase)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const YellowIcon = styled(CheckoutIconBase)`
  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`
