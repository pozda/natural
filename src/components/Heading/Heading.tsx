import classNames from 'classnames'
import { Filter } from '../Filter/Filter'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { Navigation } from '../Navigation/Navigation'
import { NavigationLink } from '../NavigationLink/NavigationLink'
import withLogger from '../withLogger/withLogger'
import logo from '../../assets/logo.svg'
import { IHeading } from './IHeading'

const HeadingComponent: React.FC<IHeading> = ({ onChange, className }: IHeading) => {
  const containerClasses = classNames('container', className?.container)

  return (
    <div className={containerClasses}>
      <Navbar>
        <Logo src={logo} className={className?.logo} />

        {onChange && <Filter onChange={onChange} className={className?.filter} />}

        <Navigation>
          <NavigationLink className={className?.navigationLink} to={'/'}>
            Home
          </NavigationLink>
          <NavigationLink className={className?.navigationLink} to={'/posts'}>
            Blog
          </NavigationLink>
          <NavigationLink className={className?.navigationLink} to={'https://github.com/pozda/natural'}>
            Repository
          </NavigationLink>
        </Navigation>
      </Navbar>
    </div>
  )
}

HeadingComponent.displayName = 'Heading'

export const Heading: React.FC<IHeading> = withLogger<IHeading>(HeadingComponent)
