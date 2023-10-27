import withLogger from '../withLogger/withLogger'
import { INavigation } from './INavigation'
import styles from './Navigation.module.css'
import classNames from 'classnames'

const NavigationComponent: React.FC<INavigation> = ({ className, children }: INavigation) => {
  const navigationClasses = classNames(styles.navigation, className?.navigation)
  return (
    <>
      <nav className={navigationClasses}>{children}</nav>
    </>
  )
}

NavigationComponent.displayName = 'Navigation'

export const Navigation: React.FC<INavigation> = withLogger<INavigation>(NavigationComponent)
