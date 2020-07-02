import { IPagination } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/pagination.scss';

/**
 * Types
 */
const variants = {
  Numbers: 'pagination--numbers',
  Dots: 'pagination--dots'
};

/**
 * Pagination dots
 */
const Pagination: React.FC<IPagination.IProps> = ({
  className,
  variant = 'Numbers',
  current,
  items,
  onPrev,
  onCurrent,
  onNext
}) => (
  <ul className={cx(className, 'pagination', variants[variant])}>
    {onPrev && (
      <li className={cx('pagination__item')}>
        <button className={cx('pagination__btn')} onClick={onPrev}>
          Prev
        </button>
      </li>
    )}

    {items.map((x, i) => (
      <li key={`pagination-item-${i}`} className={cx('pagination__item')}>
        <button className={cx('pagination__btn', { 'pagination__btn--active': current === i })} onClick={() => onCurrent(i)}>
          {x}
        </button>
      </li>
    ))}

    {onNext && (
      <li className={cx('pagination__item')}>
        <button className={cx('pagination__btn')} onClick={onNext}>
          Next
        </button>
      </li>
    )}
  </ul>
);

export default Pagination;
