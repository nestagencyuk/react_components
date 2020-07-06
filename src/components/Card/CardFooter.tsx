import { ICard } from './types';
import * as React from 'react';

/**
 * Components
 */
import { Footer } from '../Footer';

/**
 * Render alert actions
 */
const CardFooter: React.FC<ICard.IFooterProps> = (props) =>
  props.actions ? <Footer className="card__footer" {...props} /> : null;

export default CardFooter;
