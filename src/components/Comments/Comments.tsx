import { ICommentsData } from './ICommentsData'
import withLogger from '../withLogger/withLogger'
import Comment from '../Comment/Comment'
import { IComment } from '../Comment/IComment'
import classNames from 'classnames'
import styles from './Comments.module.css'

const CommentsComponent: React.FC<ICommentsData> = ({ data, className }: ICommentsData) => {
  const commentsClasses = classNames(styles.comments, className?.comments)
  const commentsTitleClasses = classNames(styles.commentsTitle, className?.commentsTitle)
  return (
    <div className={commentsClasses}>
      <h2 className={commentsTitleClasses}>Comments</h2>
      {data?.map((comment: IComment) => <Comment comment={comment} key={comment?.id} className={className} />)}
    </div>
  )
}

const Comments: React.FC<ICommentsData> = withLogger<ICommentsData>(CommentsComponent, 'Custom message')

export default Comments
