import classNames from 'classnames'
import { getInitials } from '../../utils/getInitials'
import withLogger from '../withLogger/withLogger'
import styles from './AuthorInfo.module.css'
import { IAuthorInfo } from './IAuthorInfo'
import { Link } from 'react-router-dom'

const AuthorInfoComponent: React.FC<IAuthorInfo> = ({ user, className }: IAuthorInfo) => {
  const initials = getInitials(user?.name)
  const authorClasses = classNames(styles.author, className?.author)
  const authorTitleClasses = classNames(styles.authorTitle, className?.authorTitle)
  const authorDetailsClasses = classNames(styles.authorDetails, className?.authorDetails)
  const authorInitialsClasses = classNames(styles.authorInitials, className?.authorInitials)
  const authorNameClasses = classNames(styles.authorName, className?.authorName)
  const authorEmailClasses = classNames(styles.authorEmail, className?.authorEmail)
  const authorMotoClasses = classNames(styles.authorMoto, className?.authorMoto)
  const authorCatchPhraseClasses = classNames(styles.authorCatchPhrase, className?.authorCatchPhrase)
  const authorInfoClasses = classNames(styles.authorInfo, className?.authorInfo)
  const authorPhoneClasses = classNames(styles.authorPhone, className?.authorPhone)
  const authorWebsiteClasses = classNames(styles.authorWebsite, className?.authorWebsite)

  return (
    <div className={authorClasses}>
      <p className={authorTitleClasses}>A little bit about author {user?.name}</p>
      <div className={authorDetailsClasses}>
        <div className={authorInitialsClasses}>{initials}</div>
        <div>
          <h3 className={authorNameClasses}>{user?.name}</h3>
          <p className={authorMotoClasses}>{user.company.bs}</p>
        </div>
      </div>

      <p className={authorCatchPhraseClasses}>{user?.company.catchPhrase}</p>

      <div className={authorInfoClasses}>
        <Link className={authorEmailClasses} to={`mailto:${user?.email}`}>
          {user?.email}
        </Link>
        <p className={authorPhoneClasses}>{user?.phone}</p>
        <Link className={authorWebsiteClasses} to={`https://${user?.website}`}>
          {user?.website}
        </Link>
      </div>
    </div>
  )
}
const AuthorInfo: React.FC<IAuthorInfo> = withLogger<IAuthorInfo>(AuthorInfoComponent, 'Custom message')

export default AuthorInfo
