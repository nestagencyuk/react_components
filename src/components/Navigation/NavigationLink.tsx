import { INavigation } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * A Navigation link using React Router
 */
const NavigationLink: React.FC<INavigation.ILinkProps> = ({
  className,
  component,
  href,
  to,
  target,
  active,
  external,
  children,
  onClick
}) => {
  const Tag: React.FC<{ [key: string]: any }> | string = component || 'a';

  return (
    <Tag
      className={cx(className, 'nav__link', { 'nav__link--active': active })}
      href={href}
      to={to}
      target={target}
      rel={external ? 'noopener' : undefined}
      onClick={onClick}
    >
      <span>{children}</span>
    </Tag>
  );
};

export default NavigationLink;
