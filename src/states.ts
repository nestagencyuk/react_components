/**
 * Global/shared state machines
 */
const opening = {
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

const loading = {
  initial: 'Idle',
  states: {
    Idle: {
      on: {
        LOAD: 'Loading'
      }
    },
    Loading: {
      on: {
        SUCCESS: 'Done',
        ERROR: 'Retry'
      }
    },
    Done: {
      next: 'Idle'
    },
    Retry: {
      on: {
        RESET: 'Idle'
      }
    }
  }
}

export { opening, loading }
