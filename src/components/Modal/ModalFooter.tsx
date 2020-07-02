import { IModal } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Components
 */
import { Footer } from '../Footer';

/**
 * Render the modal actions
 */
const ModalFooter: React.FC<IModal.IFooterProps> = (props) =>
  props.actions ? <Footer className={cx('modal__footer')} {...props} /> : null;

export default ModalFooter;
