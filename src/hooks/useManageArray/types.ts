import { IGenericObject } from '../../types'

declare namespace IUseManageArray {
  interface IProps {
    initialArray?: Array<string | (IGenericObject & { _uid?: string })>
  }

  type IState = Array<string | (IGenericObject & { _uid?: string })>
}

export { IUseManageArray }
