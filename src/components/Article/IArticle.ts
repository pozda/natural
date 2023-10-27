import { IPost } from '../../pages/Posts/IPost'
import { IUser } from '../../pages/Posts/IUser'

export interface IArticle extends JSX.IntrinsicAttributes {
  post: IPost | undefined
  user: IUser | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: Record<string, any>
}
