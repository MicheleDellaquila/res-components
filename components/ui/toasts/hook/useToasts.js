import { useEffect, useState } from "react"

// close toast
const closeAutoOneToast = list => {
  const copyList = [...list]

  // delete toast
  copyList.shift()
  return copyList
}

const useToasts = toast => {
  const [list, setList] = useState([])

  // update toast list
  useEffect(() => {
    if (!toast.length) return

    setList([...toast])
  }, [toast])

  // close automatically each toast
  useEffect(() => {
    if (!list.length) return

    // close one toast afert 1000ms
    const timeout = setTimeout(() => {
      setList([...closeAutoOneToast(list)])
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [list])

  return list
}

export default useToasts
