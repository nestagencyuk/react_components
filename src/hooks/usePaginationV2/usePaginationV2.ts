import { useState, useEffect } from 'react'

/**
 * A hook for return a slice of an array, and paginating between slices
 */
const usePaginationV2 = ({ array, pageLimit }: { array: any[]; pageLimit: number }) => {
  const [currentIndex, setCurrentPage] = useState(1)
  const [currentSlice, setCurrentData] = useState([])
  const lastIndex = Math.ceil(array.length / pageLimit)

  /**
   * Return next page's slice
   */
  const handleNext = () => {
    setCurrentPage(() => Math.min(currentIndex + 1, lastIndex))
  }

  /**
   * Return prev page's slice
   */
  const handlePrev = () => {
    setCurrentPage(() => Math.max(currentIndex - 1, 1))
  }

  /**
   * Return specific page's slice
   */
  const handleSkip = (page: number) => {
    const pageNumber = Math.max(1, page)

    if (!isNaN(page)) {
      setCurrentPage(() => Math.min(pageNumber, lastIndex))
    }
  }

  /**
   * Dynamically adjust start/end of pagination
   */
  useEffect(() => {
    const begin = (currentIndex - 1) * pageLimit
    const end = begin + pageLimit
    setCurrentData(array.slice(begin, end))

    if (currentIndex > lastIndex) {
      handleSkip(lastIndex)
    }
  }, [currentIndex, array])

  return { currentSlice, currentIndex, lastIndex, handleNext, handlePrev, handleSkip }
}

export default usePaginationV2
