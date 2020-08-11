import { IUseManageArray } from '../../hooks/useManageArray/types'

declare namespace IDataTable {
  interface IProps {
    data: FormData[]
    children: React.ReactNode
    onSubmit: (data: any[]) => void
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    rows: IUseManageArray.IState
    addRow: (value: FormData) => void
    editRow: (value: FormData & { _uid: string }) => void
    deleteRow: (uid: string) => void
    handleSubmit: (e: FormData[]) => void
  }
}

export { IDataTable }
