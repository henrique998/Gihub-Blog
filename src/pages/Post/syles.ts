import styled from 'styled-components'

export const PostContainer = styled.main`
  .content-container {
    padding: 2.5rem 2rem;
    color: ${(props) => props.theme['base-text']};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${(props) => props.theme.blue};
      margin-top: 1.5rem;
    }

    ul {
      list-style: disc;
      margin-left: 1.5rem;
      margin-top: 1.5rem;
    }

    li,
    p {
      line-height: 160%;
    }

    p {
      margin-top: 1.5rem;
    }

    a {
      color: ${(props) => props.theme.blue};
    }

    img {
      max-width: 50rem;
    }

    .html {
      code {
        background-color: ${(props) => props.theme['base-post']};

        padding: 1rem;
        border-radius: 6px;
      }
    }
  }
`
