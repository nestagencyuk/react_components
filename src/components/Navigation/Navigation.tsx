import * as React from 'react'
import { useState, useEffect } from 'react'
import { withRouter as withRRouter } from 'react-router-dom'
import cx from 'classnames'

/**
 * Styles
 */
import './Navigation.scss'

/**
 * Components
 */
import { NavigationBrand, NavigationList, NavigationItem, NavigationLink } from './'

const Navigation: React.FC<Navigation.IProps> = (props) => {
  const { className, router, brand, links } = props
  const [translateValue, setTV] = useState('50%')

  const leftLinks = links.filter((x: any) => x.location === 'left')
  const rightLinks = links.filter((x: any) => x.location === 'right')
  const isActive = (url: string) => router.history.location.pathname === url

  useEffect(() => {
    const activeIndex = links.find((x: any, i: any) => isActive(x.href))
    const i = links.indexOf(activeIndex)
    const distance = `calc(50% - ${document.querySelector('.nav__item').clientWidth * i}px - 50px)`
    if (translateValue === distance) return
    setTV(distance)
  })

  return (
    <nav className={cx(className, 'nav')} style={{ left: translateValue }}>
      {brand && brand.location === 'left' && <NavigationBrand {...brand} />}

      {leftLinks.length > 0 && (
        <NavigationList>
          {leftLinks.map((x: any) => (
            <NavigationItem key={`navItem-${x.text}`} active={isActive(x.href)}>
              <NavigationLink href={x.href} active={isActive(x.href)}>
                {x.text}
              </NavigationLink>
            </NavigationItem>
          ))}
        </NavigationList>
      )}

      {brand && brand.location === 'center' && <NavigationBrand {...brand} />}

      {rightLinks.length > 0 && (
        <NavigationList>
          {rightLinks.map((x: any) => (
            <NavigationItem key={`navItem-${x.text}`} active={isActive(x.href)}>
              <NavigationLink href={x.href} active={isActive(x.href)}>
                {x.text}
              </NavigationLink>
            </NavigationItem>
          ))}
        </NavigationList>
      )}

      {brand && brand.location === 'right' && <NavigationBrand {...brand} />}
    </nav>
  )
}

const withRouter = (Component: any) =>
  withRRouter((props: any) => {
    return <Component {...props} router={{ history: props.history, location: props.location }} />
  })

export default withRouter(Navigation)
