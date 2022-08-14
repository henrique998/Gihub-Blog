/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { Post as PostType } from '../../contexts/SearchContext'
import { PostInfoCard } from './components/PostInfoCard'

import { PostContainer } from './syles'
import { api } from '../../libs/axios'
import { formattDate } from '../../utils/formattDate'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function Post() {
  const [post, setPost] = useState<PostType>()
  const { postId } = useParams()

  const url = `/repos/henrique998/henrique-client-axi/issues/${postId}`

  useEffect(() => {
    api.get(url).then((res) => setPost(res.data))
  }, [url])

  return (
    <PostContainer>
      <PostInfoCard
        title={post?.title}
        author={post?.user.login}
        url={post?.html_url}
        comments={post?.comments}
        createdAt={formattDate(post?.created_at ?? '')}
      />

      <section className="content-container">
        <ReactMarkdown
          linkTarget={'_blank'}
          className="html"
          children={post?.body ?? ''}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      </section>
    </PostContainer>
  )
}
