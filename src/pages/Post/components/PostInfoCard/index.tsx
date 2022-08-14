import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostInfoCardContainer, PostInfo } from './styles'

export function PostInfoCard() {
  return (
    <PostInfoCardContainer>
      <header>
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <ExternalLink text="VER NO GITHUB" href="#" />
      </header>

      <h1>JavaScript data types and data structures</h1>

      <PostInfo>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>

        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>

        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </PostInfo>
    </PostInfoCardContainer>
  )
}
