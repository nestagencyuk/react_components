import { IFooter } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/footer.scss';

/**
 * Components
 */
import { Button } from '../Button';

/**
 * A footer for use within a component
 */
const Footer: React.FC<IFooter.IProps> = ({ className, actions, subInfo }) =>
  actions || subInfo ? (
    <footer className={cx(className, 'footer')}>
      <div className="footer__actions">
        {actions.map((x, i) => (
          <Button key={`footer-btn-${i}`} {...x}>
            {x.text}
          </Button>
        ))}
      </div>
      {subInfo && <div className="footer__sub">{subInfo}</div>}
    </footer>
  ) : null;

export default Footer;
