import { IUser } from './IUser'

export interface IPost extends JSX.IntrinsicAttributes {
  id: number
  userId: number
  title: string
  body: string
  user?: IUser
}
