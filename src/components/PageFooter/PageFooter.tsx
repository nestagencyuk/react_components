import { IPageFooter } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/page-footer.scss';

/**
 * Components
 */
import { Grid, GridItem } from '../Grid';
import { Image } from '../Image';
import { PageFooterList } from '.';

/**
 * A footer for the whole page
 */
const PageFooter: React.FC<IPageFooter.IProps> = ({ className, image, links = [], subInfo }) => {
  const startLinks = links.filter((x: any) => x.align === 'Start');
  const endLinks = links.filter((x: any) => x.align === 'End');

  return (
    <footer className={cx(className, 'page-footer')}>
      <Grid className="page-footer__body" gutter>
        {image && (
          <GridItem span={2}>
            <div className={'page-footer__img'}>
              <Image {...image} />
            </div>
          </GridItem>
        )}

        <GridItem span={5}>
          <PageFooterList items={startLinks} />
        </GridItem>

        <GridItem span={5}>
          <PageFooterList items={endLinks} />
        </GridItem>
      </Grid>

      {subInfo && <div className={'page-footer__sub'}>{subInfo}</div>}
    </footer>
  );
};

export default PageFooter;
