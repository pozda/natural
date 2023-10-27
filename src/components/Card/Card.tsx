import withLogger from '../withLogger/withLogger'
import styles from './Card.module.css'
import classNames from 'classnames'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { Link } from 'react-router-dom'
import { ICard } from './ICard'

const CardComponent: React.FC<ICard> = ({ post, className }: ICard) => {
  const cardClasses = classNames(styles.card, className?.card)
  const cardTitleClasses = classNames(styles.cardTitle, className?.cardTitle)
  const cardLinkClasses = classNames(styles.cardLink, className?.cardLink)
  const cardAuthorClasses = classNames(styles.cardAuthor, className?.cardAuthor)
  const cardMoreClasses = classNames(styles.cardMore, className?.cardMore)
  return (
    <div className={cardClasses}>
      <h1 className={cardTitleClasses}>
        <Link className={cardLinkClasses} to={`/post/${post?.id}`}>
          {post?.title}
        </Link>
      </h1>
      <h3 className={cardAuthorClasses}>{post?.user?.name}</h3>
      <p>{post?.body}</p>
      <div className={cardMoreClasses}>
        <ButtonLink className={className} to={`/post/${post?.id}`}>
          Read the Post
        </ButtonLink>
      </div>
    </div>
  )
}

CardComponent.displayName = 'Card'

export const Card: React.FC<ICard> = withLogger<ICard>(CardComponent)
