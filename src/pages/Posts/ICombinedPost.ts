import { IPost } from './IPost'
import { IUser } from './IUser'

export interface ICombinedPost extends IPost {
  name: IPost
  user: IUser
}
