import styled from 'styled-components'

export const CheckoutCart = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const CheckoutTotal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 12px;

  .bold {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 700;
    font-size: 1.25rem;
  }

  p:nth-child(even) {
    text-align: right;
  }
`

export const CheckoutButton = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  border: none;
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.875rem;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
