import { useCallback, useEffect, useState } from "react"
import { isSameDay } from "../utils/helpers/isSameDay"

/* check each values is equal to query filters */
export const useCombineFilter = (array, filters) => {
  const [arrayFiltered, setArrayFiltered] = useState([])

  // filter array
  const filterArray = useCallback(() => {
    const filteredArray = array.filter(item => {
      return Object.keys(filters).every(filter => {
        const query = filters[filter]

        // check query is a date value
        if (query instanceof Date) {
          const isSame = isSameDay(item[filter], query)
          return isSame ? item : false
        }

        // check query is empty string
        if (!query) return

        return item[filter].toLowerCase().includes(query.toLowerCase())
          ? item
          : false
      })
    })

    setArrayFiltered([...filteredArray])
  }, [array, filters])

  // filter array when filters changed
  useEffect(() => {
    if (!array.length) return

    filterArray()
  }, [array, filters, filterArray])

  return new Set(arrayFiltered)
}

/* check each values contains query filters at least */
const useFilter = (array, filters) => {
  const [arrayFiltered, setArrayFiltered] = useState([])

  // filter array check it is equal to one value
  const filterArray = useCallback(() => {
    const filteredArray = array.filter(item => {
      return Object.keys(filters).some(filter => {
        const query = filters[filter]

        // check query is a date value
        if (query instanceof Date) {
          const isSame = isSameDay(item[filter], query)
          return isSame ? item : false
        }

        // check query is empty string
        if (!query) return

        return item[filter].toLowerCase().includes(query.toLowerCase())
          ? item
          : false
      })
    })

    setArrayFiltered([...filteredArray])
  }, [array, filters])

  // filter
  useEffect(() => {
    if (!array.length) return

    filterArray()
  }, [filterArray])

  return new Set(arrayFiltered)
}

export default useFilter
