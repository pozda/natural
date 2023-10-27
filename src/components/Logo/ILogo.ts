export interface ILogo extends JSX.IntrinsicAttributes {
  src: string
  height?: number | 'auto'
  width?: number | 'auto'
  alt?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: Record<string, any>
}
