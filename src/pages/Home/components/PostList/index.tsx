import { usePosts } from '../../../../contexts/SearchContext'
import { PostCard } from '../PostCard'
import { PosListContainer } from './styles'

export function PostList() {
  const { posts } = usePosts()

  return (
    <PosListContainer>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          createdAt={post.created_at}
          number={post.number}
        />
      ))}
    </PosListContainer>
  )
}
