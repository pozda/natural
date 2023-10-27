export interface IButtonLink extends JSX.IntrinsicAttributes {
  className?: {
    btn?: string
  }
  to: string
  children: React.ReactNode
}
