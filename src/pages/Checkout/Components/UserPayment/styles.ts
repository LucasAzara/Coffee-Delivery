import styled from 'styled-components'

export const PaymentMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 24px) / 3));
  grid-gap: 0px 12px;

  button {
    border: none;
    background-color: ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['gray-400']};
    }
  }
`
