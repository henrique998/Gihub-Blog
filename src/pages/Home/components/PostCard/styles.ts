import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem 1.875rem;
  cursor: pointer;

  border: 2px solid transparent;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2rem;
      max-width: 17.5rem;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.375rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border-color 0.2s;
  }
`
