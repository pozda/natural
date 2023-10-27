import { IComment } from './IComment'

export interface ICommentData extends JSX.IntrinsicAttributes {
  comment: IComment
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: Record<string, any>
}
