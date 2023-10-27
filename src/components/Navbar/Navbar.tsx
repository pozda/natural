import React from 'react'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import withLogger from '../withLogger/withLogger'
import { INavbar } from './INavbar'

const NavbarComponent: React.FC<INavbar> = ({ className, children }) => {
  const NavbarClasses = classNames(styles.navbar, className?.navbar)
  return <div className={NavbarClasses}>{children}</div>
}

NavbarComponent.displayName = 'Navbar'

export const Navbar: React.FC<INavbar> = withLogger<INavbar>(NavbarComponent)
