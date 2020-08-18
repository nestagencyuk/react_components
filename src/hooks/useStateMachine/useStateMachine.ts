import { IUseStateMachine } from './types'
import { useState, useEffect } from 'react'

/**
 * Provide a boolean state
 */
const useStateMachine = ({ delay = 500, machine }: IUseStateMachine.IProps = {}): [
  IUseStateMachine.IState,
  React.Dispatch<React.SetStateAction<IUseStateMachine.Event>>
] => {
  const [state, setState] = useState<IUseStateMachine.IState>(machine.initial)

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
    setNext()
  }, [state])

  return [state, dispatchEvent]
}

export default useStateMachine
