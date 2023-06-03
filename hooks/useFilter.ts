import { useCallback, useEffect, useState } from "react"
import { Filter } from "../types"

const useFilter = <T extends Array<T>>(array: T, filters: Filter) => {
  const [arrayFiltered, setArrayFiltered] = useState<T[] | []>([])

  // filter array by filters values
  const filterArray = useCallback(() => {
    if (
      !Object.keys(filters).length ||
      (Object.keys(filters).length === 1 && !Object.values(filters)[0])
    )
      return setArrayFiltered([...array])

    // filter array when filters has almost 1 item
    const filteredArray = array.filter(item => {
      return Object.keys(filters).some(filter => {
        const query = filters[filter as keyof typeof filters]

        // check query is empty string
        if (!query) return

        return (item[filter as keyof typeof array] as string)
          ?.toLowerCase()
          .includes(query.toLowerCase())
          ? item
          : false
      })
    })

    setArrayFiltered([...filteredArray])
  }, [array, filters])

  // filter each times array updated
  useEffect(() => {
    if (!array.length) return

    filterArray()
  }, [filterArray])

  return arrayFiltered
}

export default useFilter