import styled from 'styled-components'

export const HeadingContainer = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 2rem 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

const ButtonBase = styled.button`
  border: unset;
  border-radius: 6px;
  padding: 8px;
  min-height: 2.375rem;
  min-width: 2.375rem;
  background-color: unset;

  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const Cart = styled(ButtonBase)`
  background-color: ${(props) => props.theme['yellow-300']};
  height: 100%;

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
    svg {
      color: ${(props) => props.theme['yellow-300']};
    }
  }

  svg {
    color: ${(props) => props.theme['yellow-500']};
    font-size: 1.375rem;
  }
`

export const Location = styled(ButtonBase)`
  background-color: ${(props) => props.theme['purple-300']};

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
    svg {
      color: ${(props) => props.theme['purple-300']};
    }
    p {
      color: ${(props) => props.theme['purple-300']};
    }
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
    font-size: 1.375rem;
  }
  p {
    color: ${(props) => props.theme['purple-700']};
  }
`
