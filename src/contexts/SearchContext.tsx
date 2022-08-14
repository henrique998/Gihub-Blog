import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../libs/axios'

export type Post = {
  id: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
  }
  comments: number
  html_url: string
  number: number
}

type SearchContextData = {
  posts: Post[]
  getPosts: (items: Post[]) => void
}

interface SearchContextProviderProps {
  children: ReactNode
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData,
)

export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  function getPosts(items: Post[]) {
    setPosts(items)
  }

  useEffect(() => {
    api
      .get('/repos/henrique998/henrique-client-axi/issues')
      .then((res) => setPosts(res.data))
  }, [])

  return (
    <SearchContext.Provider value={{ posts, getPosts }}>
      {children}
    </SearchContext.Provider>
  )
}

export function usePosts() {
  return useContext(SearchContext)
}
