import { IUseManageArray } from '../../hooks/useManageArray/types'
import { IGenericObject } from '../../types'

declare namespace IManageArray {
  interface IProps {
    initialArray: IGenericObject[]
    children: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    array: IUseManageArray.IState
    addItem: (value: IGenericObject) => void
    editItem: (value: IGenericObject & { _uid: string }) => void
    deleteItem: (uid: string) => void
  }
}

export { IManageArray }
