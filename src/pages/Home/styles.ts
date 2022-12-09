import styled from 'styled-components'

export const HomeContainer = styled.main``

// Intro ---------------------------------------------------------

export const Intro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
  margin: 5rem 0;
`

export const IntroHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: ${(props) => props.theme['gray-800']};

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 2.8rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
  }
`

// Icons ---------------------------------------------------------

export const IntroIcons = styled.div`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 20px 0;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
const SpanBase = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
  }
`
export const Shopping = styled(SpanBase)`
  background-color: ${(props) => props.theme['yellow-700']};
`
export const Box = styled(SpanBase)`
  background-color: ${(props) => props.theme['gray-700']};
`
export const Time = styled(SpanBase)`
  background-color: ${(props) => props.theme['yellow-500']};
`
export const CoffeCup = styled(SpanBase)`
  background-color: ${(props) => props.theme['purple-500']};
`
// Coffees ---------------------------------------------------------

export const CoffeeTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  color: ${(props) => props.theme['gray-800']};
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, calc((100% / 4)));
  gap: 40px 32px;

  margin-top: 3rem;

  li {
    list-style: none;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: ${(props) => props.theme['gray-100']};
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;

    padding: 0px 24px 20px 24px;

    img {
      position: relative;
      top: -20px;
      margin-bottom: -16px;
    }
  }
`

export const CoffeInfo = styled.div`
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      gap: 12px;

      span {
        background-color: ${(props) => props.theme['yellow-300']};
        color: ${(props) => props.theme['yellow-700']};

        font-weight: 700;
        font-size: 0.625rem;

        padding: 5px 10px;

        border-radius: 25px;
      }
    }
    &:not(:first-child) {
      gap: 8px;
      flex-direction: column;
      text-align: center;

      h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.25rem;
        color: ${(props) => props.theme['gray-700']};
      }

      p {
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`

export const CoffeeShop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  /* Preço */
  p {
    span {
      font-size: 1.5rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
    }
  }

  /* Quantity & Buttons */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`

export const CoffeeQuantity = styled.span`
  display: flex;
  gap: 8px;

  background-color: ${(props) => props.theme['gray-300']};

  padding: 5px 10px;
  border-radius: 5px;

  button {
    border: none;
    cursor: pointer;
    background-color: inherit;
    width: 0.875rem;
    height: 0.875rem;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
    font-weight: 800;
  }
`

export const CoffeeCheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};

  border-radius: 5px;
  font-size: 20px;
  padding: 5px;

  border: none;
  cursor: pointer;
`
