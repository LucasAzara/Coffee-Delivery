import styled from 'styled-components'

export const CheckoutCoffee = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
  }

  .coffeeInfo {
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .price {
    font-weight: 700;
  }

  .coffeeOptions {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`

const CoffeeButtonBase = styled.span`
  display: flex;
  gap: 8px;

  background-color: ${(props) => props.theme['gray-300']};

  padding: 5px 10px;
  border-radius: 5px;

  button {
    border: none;
    cursor: pointer;
    background-color: inherit;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const CoffeeCheckoutQuantity = styled(CoffeeButtonBase)`
  button {
    width: 0.875rem;
    height: 0.875rem;
  }
`
export const CoffeeDelete = styled(CoffeeButtonBase)`
  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
    svg {
      font-weight: 800;
    }
  }
`
