import * as React from 'react';
import { IDrawer } from './types';

/**
 * Styles
 */
import './Drawer.scss';

/**
 * Components
 */
import { Float } from '../Float';
import { Overlay } from '../Overlay';

const Drawer: React.FC<IDrawer.IProps> = ({ onClick, children }) => {
  const escapeKeyCode = 27;

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === escapeKeyCode) {
        onClick();
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Overlay portal fixed onClick={onClick} />
      <Float className="drawer animate animate--swipe-in-left" portal align={{ x: 'Start', y: 'Start' }}>
        <div>{children}</div>
      </Float>
    </React.Fragment>
  );
};

export default Drawer;
