import classNames from 'classnames'
import { ICommentData } from './ICommentData'
import { getInitials } from '../../utils/getInitials'
import styles from './Comment.module.css'
import withLogger from '../withLogger/withLogger'
import { Link } from 'react-router-dom'

const CommentComponent: React.FC<ICommentData> = ({ comment, className }: ICommentData) => {
  const initials = getInitials(comment?.email)

  const commentClasses = classNames(styles.comment, className?.comment)
  const commentUserDetailsClasses = classNames(styles.commentUserDetails, className?.commentUserDetails)
  const commentInitialsClasses = classNames(styles.commentInitials, className?.commentInitials)
  const commentEmailClasses = classNames(styles.commentEmail, className?.commentEmail)
  const commentNameClasses = classNames(styles.commentName, className?.commentName)
  const commentBodyClasses = classNames(styles.commentBody, className?.commentBody)
  const commentEntryClasses = classNames(styles.commentEntry, className?.commentEntry)

  return (
    <div className={commentClasses}>
      <div className={commentUserDetailsClasses}>
        <div className={commentInitialsClasses}>{initials}</div>
        <Link className={commentEmailClasses} to={`mailto:${comment?.email}`}>
          {comment?.email}
        </Link>
      </div>
      <div className={commentBodyClasses}>
        <h3 className={commentNameClasses}>{comment?.name}</h3>
        <p className={commentEntryClasses}>{comment?.body}</p>
      </div>
    </div>
  )
}

const Comment: React.FC<ICommentData> = withLogger<ICommentData>(CommentComponent, 'Custom message')

export default Comment
