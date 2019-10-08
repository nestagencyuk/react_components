import * as React from 'react'
import cx from 'classnames'

const NavigationBrand: React.FC<Navigation.IBrandProps> = (props) => {
  const { className, img, children } = props

  console.log(img)
  return (
    <a className={cx('nav__brand')}>
      <img className={cx('nav__img')} src={img} />
    </a>
  )
}

export default NavigationBrand
