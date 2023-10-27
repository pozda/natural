import { IComment } from '../Comment/IComment'

export interface ICommentsData extends JSX.IntrinsicAttributes {
  isPending?: boolean
  isError?: boolean
  data: IComment[] | undefined

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: Record<string, any>
}
