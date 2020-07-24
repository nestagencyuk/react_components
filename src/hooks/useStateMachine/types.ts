import { OpenState } from '../../types'

declare namespace IUseStateMachine {
  interface IProps {
    delay?: number
    machine?: {
      initial: OpenState
      states: {
        [key in OpenState]: {
          next?: OpenState
          on?: {
            [key in Event]?: OpenState
          }
        }
      }
    }
    timeout?: number
  }

  type Event = 'OPEN' | 'CLOSE'
  type IState = OpenState
}

export { IUseStateMachine }
