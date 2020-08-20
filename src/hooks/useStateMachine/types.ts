declare namespace IUseStateMachine {
  interface IProps {
    delay?: number
    machine?: {
      initial: string
      states: {
        [key: string]: {
          next?: string
          on?: {
            [key: string]: string
          }
        }
      }
    }
  }

  type Event = string
  type IState = string
}

export { IUseStateMachine }
