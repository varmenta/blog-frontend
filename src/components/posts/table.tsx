import { useEffect } from 'react'
import { useLazyGetPostsQuery } from '../../redux/api/posts.api'

export const TablePosts: React.FC = () => {
  const [getPosts, { data: posts }] = useLazyGetPostsQuery()

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    if (posts) console.log(posts)
  }, [posts])

  return <></>
}
