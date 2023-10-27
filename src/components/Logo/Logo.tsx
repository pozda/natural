import classNames from 'classnames'
import withLogger from '../withLogger/withLogger'
import styles from './Logo.module.css'
import { ILogo } from './ILogo'

const LogoComponent: React.FC<ILogo> = ({
  src,
  height = 55,
  width = 'auto',
  alt = 'Logo of the website',
  className,
}: ILogo) => {
  const classes = classNames(styles.logo, className?.logo)
  return <img src={src} alt={alt} height={height} width={width} className={classes} />
}

LogoComponent.displayName = 'Logo'

export const Logo: React.FC<ILogo> = withLogger<ILogo>(LogoComponent, 'Hello Moto from')
