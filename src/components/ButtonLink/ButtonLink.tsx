import { Link } from 'react-router-dom'
import styles from './ButtonLink.module.css'
import classNames from 'classnames'
import withLogger from '../withLogger/withLogger'
import { IButtonLink } from './IButtonLink'

const ButtonLinkComponent: React.FC<IButtonLink> = ({ className, to, children }: IButtonLink) => {
  const btnClasses = classNames(styles.btn, className?.btn)
  return (
    <Link className={btnClasses} to={to}>
      {children}
    </Link>
  )
}
ButtonLinkComponent.displayName = 'ButtonLink'

export const ButtonLink: React.FC<IButtonLink> = withLogger<IButtonLink>(ButtonLinkComponent)
