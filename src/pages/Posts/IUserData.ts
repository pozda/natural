import { IUser } from './IUser'

export interface IUserData {
  isPending?: boolean
  isError?: boolean
  data: IUser
}
