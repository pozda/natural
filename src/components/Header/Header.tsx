import classNames from 'classnames'
import withLogger from '../withLogger/withLogger'
import styles from './Header.module.css'
import { IHeader } from './IHeader'
import image1 from '../../assets/images/nature02.avif'
import image2 from '../../assets/images/nature03.avif'
import image3 from '../../assets/images/nature04.avif'

const HeaderComponent: React.FC<IHeader> = ({ title, subtitle, backgroundImage, className }: IHeader) => {
  const headerClasses = classNames(styles.header, className?.header)
  const headerTitleClasses = classNames(styles.headerTitle, className?.headerTitle)
  const headerSubtitleClasses = classNames(styles.headerSubtitle, className?.headerSubtitle)

  const randomBackgroundImage = () => [image1, image2, image3][Math.floor(Math.random() * 3)]

  const image = backgroundImage ? backgroundImage : randomBackgroundImage()
  {
    console.log(image)
  }
  return (
    <div className={headerClasses} style={{ backgroundImage: `url(${image})` }}>
      {title && <h1 className={headerTitleClasses}>{title}</h1>}
      {subtitle && <h3 className={headerSubtitleClasses}>{subtitle}</h3>}
    </div>
  )
}

HeaderComponent.displayName = 'Header'

export const Header: React.FC<IHeader> = withLogger<IHeader>(HeaderComponent)
