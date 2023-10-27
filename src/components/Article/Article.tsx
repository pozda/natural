import { IArticle } from './IArticle'
import withLogger from '../withLogger/withLogger'
import { Header } from '../Header/Header'
import styles from './Article.module.css'
import classNames from 'classnames'

const ArticleComponent: React.FC<IArticle> = ({ post, user, className }: IArticle) => {
  const articleClasses = classNames(styles.article, className?.article)
  const articleBodyClasses = classNames(styles.articleBody, className?.articleBody)
  const articleTextClasses = classNames(styles.articleText, className?.articleText)

  return (
    <div className={articleClasses}>
      <Header title={post?.title} subtitle={user?.name} />
      <div className={articleBodyClasses}>
        <p className={articleTextClasses}>{post?.body}</p>
      </div>
    </div>
  )
}

const Article = withLogger(ArticleComponent, 'Custom message')

export default Article
