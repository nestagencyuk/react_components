import { Alignment } from '../../types';

declare namespace IBox {
  interface IProps {
    className?: string;
    align?: {
      x?: Alignment;
      y?: Alignment;
    };
    fill?: boolean;
    children: any;
    testId?: string;
  }
}

export { IBox };
