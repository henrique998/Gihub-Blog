import ReactMarkdown from 'react-markdown'
import { formattDate } from '../../../../utils/formattDate'
import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  content: string
  createdAt: string
  number: number
}

export function PostCard({ title, content, number, createdAt }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${number}`}>
      <header>
        <h2 title={title}>{title}</h2>

        <span>{formattDate(createdAt)}</span>
      </header>

      <ReactMarkdown
        linkTarget={'_blank'}
        remarkPlugins={[]}
        className="content"
      >
        {content}
      </ReactMarkdown>
    </PostCardContainer>
  )
}
