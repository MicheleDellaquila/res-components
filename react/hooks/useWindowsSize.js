import { useEffect, useState } from "react"

const useWindowsSize = () => {
  const [width, setWidth] = useState(window.screen.width)

  // change window size
  const changeWindowSize = () => {
    setWidth(window.screen.width)
  }

  // resize event
  useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
  }, [])

  return width
}

export default useWindowsSize
