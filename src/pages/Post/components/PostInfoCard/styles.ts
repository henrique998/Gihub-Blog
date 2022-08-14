import styled from 'styled-components'

export const PostInfoCardContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -87px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .back-link {
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
    }
  }

  h1 {
    margin-top: 1.25rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.875rem;
  }
`

export const PostInfo = styled.ul`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  color: ${(props) => props.theme['base-subtitle']};

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
