import { IUseManageArray } from '../../hooks/useManageArray/types'
import { GenericObject } from '../../types'

declare namespace IDataTable {
  interface IProps {
    data: GenericObject[]
    children: React.ReactNode
    onSubmit: (data: GenericObject[]) => void
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    rows: IUseManageArray.IState
    addRow: (value: GenericObject) => void
    editRow: (value: GenericObject & { _uid: string }) => void
    deleteRow: (uid: string) => void
    handleSubmit: (e: FormData[]) => void
  }
}

export { IDataTable }
