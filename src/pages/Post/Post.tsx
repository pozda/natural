import { Link, Params, useParams } from 'react-router-dom'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IPostData } from './IPostData'
import { IUserData } from '../Posts/IUserData'
import { ICommentsData } from '../../components/Comments/ICommentsData'
import withLogger from '../../components/withLogger/withLogger'
import Article from '../../components/Article/Article'
import Comments from '../../components/Comments/Comments'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import { Loader } from '../../components/Loader/Loader'
import { Heading } from '../../components/Heading/Heading'

const fetchPost = (postId: string | undefined) => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
const fetchComments = (postId: string | undefined) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
const fetchUser = (userId: number | undefined) => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

const PostPage: React.FC = () => {
  const { id }: Readonly<Params<string>> = useParams()

  const { data: post }: UseQueryResult<IPostData, Error> = useQuery({
    queryKey: [`post-${id}`],
    queryFn: () => fetchPost(id),
    staleTime: Infinity,
    enabled: !!id,
  })
  const userId = post?.data?.userId

  const { data: comments }: UseQueryResult<ICommentsData, Error> = useQuery({
    queryKey: [`comments-for-post-${id}`],
    queryFn: () => fetchComments(id),
    staleTime: Infinity,
    enabled: !!id,
  })

  const { data: user }: UseQueryResult<IUserData, Error> = useQuery({
    queryKey: [`user-${userId}`],
    queryFn: () => fetchUser(userId),
    staleTime: Infinity,
    enabled: !!post,
  })

  if (post?.isPending || user?.isPending || comments?.isPending) return <Loader />

  if (!user) return <Loader />

  if (post?.isError || user?.isError || comments?.isError) return <p>Post, user or comments not found</p>

  return (
    <div className="container">
      <Heading />

      <Article post={post?.data} user={user?.data} />
      <Link to="/posts">&#8647; Back to blog list</Link>
      <AuthorInfo user={user.data} />
      {comments?.data && <Comments data={comments?.data} />}
    </div>
  )
}

export const Post: React.FC = withLogger(PostPage, 'Greetings from')
