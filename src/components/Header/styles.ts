import styled from 'styled-components'
import headerBg from '../../assets/header-bg.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;

  display: flex;
  /* align-items: center; */
  justify-content: center;

  img {
    width: 9.25rem;
    height: 6.125rem;

    margin-top: 4rem;
  }
`
