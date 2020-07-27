import { useCallback } from 'react'

/**
 * Combines many refs into one. Useful for combining many ref hooks
 *
 * From: https://github.com/facebook/react/issues/13029#issuecomment-497641073
 */
const useCombinedRefs = <T extends any>(...refs: Array<React.Ref<T>>): React.Ref<T> =>
  useCallback(
    (element: T) =>
      refs.forEach((ref) => {
        if (!ref) {
          return
        }
        if (typeof ref === 'function') {
          return ref(element)
        }
        ;(ref as any).current = element
      }),
    refs
  )

export default useCombinedRefs
