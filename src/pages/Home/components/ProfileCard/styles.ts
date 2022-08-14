import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -87px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const ProfileCardDetails = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 31px;
      color: ${(props) => props.theme['base-title']};
    }
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileInfo = styled.ul`
  margin-top: 1.75rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

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
