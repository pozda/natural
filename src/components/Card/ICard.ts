import { ICombinedPost } from '../../pages/Posts/ICombinedPost'

export interface ICard extends JSX.IntrinsicAttributes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: Record<string, any>
  post: ICombinedPost
}
