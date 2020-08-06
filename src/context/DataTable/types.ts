import { IUseManageArray } from '../../hooks/useManageArray/types'

declare namespace IDataTable {
  interface IProps {
    data: Array<{ [key: string]: any }>
    children: React.ReactNode
    onSubmit: (data: any[]) => void
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    rows: IUseManageArray.IState
    addRow: (value: string | { [key: string]: any }) => void
    editRow: (value: string | { [key: string]: any }) => void
    deleteRow: (value: string | { [key: string]: any }) => void
    handleSubmit: (e: React.FormEvent) => void
  }

  interface IRowProps {
    [key: string]: any
  }

  interface ICellProps {
    [key: string]: any
  }
}

export { IDataTable }
