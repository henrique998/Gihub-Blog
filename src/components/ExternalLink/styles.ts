import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25rem;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`
