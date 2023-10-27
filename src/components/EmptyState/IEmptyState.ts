export interface IEmptyState extends JSX.IntrinsicAttributes {
  className?: {
    emptyState?: string
    emptyStateTitle?: string
    emptyStateImage?: string
  }
  title: string
}
