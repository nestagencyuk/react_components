import { IUseToggleTree } from '../../hooks/useToggleTree/types'

declare namespace IToggleTree {
  interface IProps {
    multi?: boolean
    children: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    toggles: IUseToggleTree.IState
    setToggled: (id: string, depth?: number) => void
  }
}

export { IToggleTree }
