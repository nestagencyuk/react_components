import { IUseManageArray } from '../../hooks/useManageArray/types'
import { IGenericObject } from '../../types'

declare namespace IDataTable {
  interface IProps {
    data: IGenericObject[]
    children: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    data: IUseManageArray.IState
    addRow: (value: IGenericObject) => void
    editRow: (value: IGenericObject & { _uid: string }) => void
    deleteRow: (uid: string) => void
    shapeData: (array: IGenericObject & { _uid?: string }) => IGenericObject[]
  }
}

export { IDataTable }
