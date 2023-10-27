import { IPost } from '../Posts/IPost'
import { IUser } from '../Posts/IUser'

export interface IPostData {
  isPending?: boolean
  isError?: boolean
  data: IPost | undefined
  user: IUser | undefined
}
