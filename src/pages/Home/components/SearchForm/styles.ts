import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.75rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 1.375rem;
    }
  }
`

interface InputContainerProps {
  isError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  input {
    margin-top: 0.75rem;

    width: 100%;
    height: 3.125rem;

    padding: 0 1rem;

    border-radius: 6px;
    border: 1px solid
      ${(props) =>
        props.isError ? props.theme['base-error'] : props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    font-size: 1rem;

    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }

  span {
    display: block;
    margin-top: 0.25rem;
    color: ${(props) => props.theme['base-error']};

    svg {
      margin-right: 0.5rem;
    }
  }
`
