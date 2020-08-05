import { useState, useEffect } from 'react'

const usePaginationV2 = ({ dataToPaginate, itemsPerPage }: { dataToPaginate: any[]; itemsPerPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState([])
  const lastPage = Math.ceil(dataToPaginate.length / itemsPerPage)

  /**
   * Return next page's data
   */
  const nextPage = () => {
    setCurrentPage(() => Math.min(currentPage + 1, lastPage))
  }

  /**
   * Return prev page's data
   */
  const prevPage = () => {
    setCurrentPage(() => Math.max(currentPage - 1, 1))
  }

  /**
   * Return specific page's data
   */
  const jumpToPage = (page: number) => {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, lastPage))
  }

  /**
   * Dynamically adjust start/end of pagination
   */
  useEffect(() => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    setCurrentData(dataToPaginate.slice(begin, end))

    if (currentPage > lastPage) {
      jumpToPage(lastPage)
    }
  }, [currentPage, dataToPaginate])

  return { nextPage, prevPage, jumpToPage, currentData, currentPage, lastPage }
}

export default usePaginationV2
