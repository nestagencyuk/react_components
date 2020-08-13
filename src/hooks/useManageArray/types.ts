import { GenericObject } from '../../types'

declare namespace IUseManageArray {
  interface IProps {
    initialArray?: Array<string | (GenericObject & { _uid?: string })>
  }

  type IState = Array<string | (GenericObject & { _uid?: string })>
}

export { IUseManageArray }
