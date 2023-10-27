import { IUser } from '../../pages/Posts/IUser'

export interface IAuthorInfo extends JSX.IntrinsicAttributes {
  user: IUser
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: Record<string, any>
}
