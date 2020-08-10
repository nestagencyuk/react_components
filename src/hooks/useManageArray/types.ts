declare namespace IUseManageArray {
  interface IProps {
    initialArray?: Array<string | (FormData & { _uid?: string })>
  }

  type IState = Array<string | (FormData & { _uid?: string })>
}

export { IUseManageArray }
