import styled from 'styled-components'

export const HomeContainer = styled.main``

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
// ----------------------------------------------------------------

export const CoffeeListing = styled.div``
