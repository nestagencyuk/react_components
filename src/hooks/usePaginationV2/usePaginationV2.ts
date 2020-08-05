import { useState, useEffect } from 'react'

const usePaginationV2 = ({ dataToPaginate, itemsPerPage }: { dataToPaginate: any[]; itemsPerPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState([])
  const [pagesBetween, setPagesBetween] = useState(0)
  const maxPage = Math.ceil(dataToPaginate.length / itemsPerPage)

  /**
   * Return next page's data
   */
  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  /**
   * Return prev page's data
   */
  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  /**
   * Return specific page's data
   */
  const jumpToPage = (page: number) => {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, maxPage))
  }

  /**
   * Dynamically adjust start/end of pagination
   * Generate labels for pages between min/max
   */
  useEffect(() => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage

    setCurrentData(dataToPaginate.slice(begin, end))
    setPagesBetween(Math.abs(0 - maxPage))

    if (currentPage > maxPage) {
      jumpToPage(maxPage)
    }
  }, [dataToPaginate, currentPage, pagesBetween])

  return { nextPage, prevPage, jumpToPage, currentData, currentPage, maxPage }
}

export default usePaginationV2
