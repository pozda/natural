import withLogger from '../../components/withLogger/withLogger'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { ICombinedPost } from './ICombinedPost'
import styles from './Posts.module.css'
import { Heading } from '../../components/Heading/Heading'
import { Header } from '../../components/Header/Header'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import image from '../../assets/images/nature01.avif'

interface IPostsPage extends JSX.IntrinsicAttributes {
  postsData: ICombinedPost[]
}

const PostsPage: React.FC<IPostsPage> = ({ postsData }: IPostsPage) => {
  const [posts, postsSet] = useState<ICombinedPost[] | null>(null)

  useEffect(() => {
    postsSet(postsData)
  }, [postsData])

  const filterPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const string = e.target.value.toLowerCase()
    if (Array.isArray(postsData)) {
      const result = postsData.filter((x) => x?.user?.name.toLowerCase().includes(string))
      if (string.length < 1) {
        postsSet(postsData)
      } else {
        postsSet(result)
      }
    }
  }

  console.log(image)
  return (
    <div className="container">
      <Heading onChange={filterPosts} />
      <Header title={'Wanderlust Diary'} subtitle={"Embracing Nature's Call"} backgroundImage={image} />
      {posts?.length === 0 && <EmptyState title={'No Authors found! Try another search!'} />}
      <div className={styles.postsCardContainer}>{posts?.map((post) => <Card post={post} key={post.id} />)}</div>
    </div>
  )
}

export const Posts: React.FC<IPostsPage> = withLogger<IPostsPage>(PostsPage)
