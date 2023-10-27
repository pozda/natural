import { NavLink } from 'react-router-dom'
import withLogger from '../withLogger/withLogger'
import styles from './NavigationLink.module.css'
import classNames from 'classnames'
import { INavigationLink } from './INavigationLink'

const NavigationLinkComponent: React.FC<INavigationLink> = ({ className, children, to }: INavigationLink) => {
  const navigationLinkClasses = classNames(styles.navigationLink, className?.navigationLink)

  const navigationActiveLinkClasses = classNames(
    styles.navigationLink,
    className?.navigationLink,
    styles.navigationLinkActive,
  )

  return (
    <NavLink className={({ isActive }) => (isActive ? navigationActiveLinkClasses : navigationLinkClasses)} to={to}>
      {children}
    </NavLink>
  )
}

NavigationLinkComponent.displayName = 'NavigationLink'

export const NavigationLink: React.FC<INavigationLink> = withLogger<INavigationLink>(NavigationLinkComponent)
