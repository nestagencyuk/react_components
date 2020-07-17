import { IUseToggleTree } from '../../hooks/useToggleTree/types';

declare namespace IToggleTree {
  interface IProps {
    multi?: boolean;
    children:
      | React.ReactNode
      | ((value: {
          toggles: { [key: string]: { open: boolean; depth: number } };
          setToggled: (id: string, depth?: number) => void;
        }) => React.ReactNode);
  }

  interface IValue {
    toggles: IUseToggleTree.IState;
    setToggled: (id: string, depth?: number) => void;
  }
}

export { IToggleTree };
