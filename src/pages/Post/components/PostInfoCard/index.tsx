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

interface PostInfoCardProps {
  url: string | undefined
  title: string | undefined
  author: string | undefined
  createdAt: string | undefined
  comments: number | undefined
}

export function PostInfoCard({
  title,
  author,
  comments,
  url,
  createdAt,
}: PostInfoCardProps) {
  return (
    <PostInfoCardContainer>
      <header>
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <ExternalLink text="VER NO GITHUB" target={'_blank'} href={url} />
      </header>

      <h1>{title}</h1>

      <PostInfo>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {author}
        </li>

        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          {createdAt}
        </li>

        <li>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </li>
      </PostInfo>
    </PostInfoCardContainer>
  )
}
