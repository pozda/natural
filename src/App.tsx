import { Routes, Route } from 'react-router-dom'
import { Posts } from './pages/Posts/Posts'
import { Post } from './pages/Post/Post'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IPost } from './pages/Posts/IPost'
import { IUser } from './pages/Posts/IUser'
import { RouteProps } from 'react-router'
import { ICombinedPost } from './pages/Posts/ICombinedPost'
import { Loader } from './components/Loader/Loader'
import { Home } from './pages/Home/Home'

const App: React.FC<RouteProps> = () => {
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return data
    },
    staleTime: Infinity,
  })

  const users = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data
    },
    staleTime: Infinity,
  })

  if (posts.isPending || users.isPending) return <Loader />

  const postsList: ICombinedPost[] = posts.data.map((post: IPost) => {
    const userObject = users.data.find((x: IUser) => x.id === post.userId) ?? { id: '', name: '', username: '' }
    return {
      ...post,
      user: userObject,
    }
  })

  if (users.isPending || posts.isPending) return <Loader />

  if (users.isError || posts.isError)
    return `ERROR > > > make error component ${users.error ? users.error : posts.error}`

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts postsData={postsList} />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  )
}

export default App
