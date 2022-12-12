import styled from 'styled-components'

// Form

export const UserForm = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 21.75rem 3.75rem;

  gap: 16px 12px;

  input {
    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;
    padding: 12px;
  }

  #userCep {
    width: 12.5rem;
    grid-column-start: 1;
    grid-column-end: 4;
  }

  #userStreet {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  #userExtra {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`
