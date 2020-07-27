import { IUseStateMachine } from './types'
import { useState, useEffect } from 'react'

/**
 * Default machine
 */
const defaultMachine: IUseStateMachine.IProps['machine'] = {
  initial: 'Closed',
  states: {
    Closed: {
      on: {
        OPEN: 'Opening'
      }
    },
    Opening: {
      next: 'Open'
    },
    Open: {
      on: {
        CLOSE: 'Closing'
      }
    },
    Closing: {
      next: 'Closed'
    }
  }
}

/**
 * Provide a boolean state
 */
const useStateMachine = ({ delay = 500, machine = defaultMachine, timeout }: IUseStateMachine.IProps = {}): [
  IUseStateMachine.IState,
  React.Dispatch<React.SetStateAction<IUseStateMachine.Event>>
] => {
  const [state, setState] = useState<IUseStateMachine.IState>(machine.initial)
  const timer = () => setTimeout(() => dispatchEvent('CLOSE'), timeout)

  /**
   * Set the next in the state machine
   */
  const setNext = () => {
    setTimeout(() => {
      const next = machine.states[state].next
      if (next) setState(next)
    }, delay)
  }

  /**
   * Handle closing if timeout is set
   */
  const handleTimeout = () => {
    if (state === 'Open' && timeout) {
      timer()
    }
  }

  /**
   * Set the event
   * @param e
   */
  const dispatchEvent = (e: IUseStateMachine.Event) => {
    setState((prev) => (machine.states[prev].on && machine.states[prev].on[e]) || prev)
  }

  /**
   * Set next state
   */
  useEffect(() => {
    if (!state) return
    handleTimeout()
    setNext()
    return () => clearTimeout(timer())
  }, [state])

  return [state, dispatchEvent]
}

export default useStateMachine
