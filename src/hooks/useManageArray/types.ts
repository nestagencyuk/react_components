declare namespace IUseManageArray {
  interface IProps {
    initialArray?: Array<{ [key: string]: any } | string>
  }

  type IState = Array<{ [key: string]: any } | string>
}

export { IUseManageArray }
