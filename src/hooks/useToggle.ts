import { useEffect, useState } from 'react'

function useToggle() {
  const [toggle, _setToggle] = useState(false)
  const [toggleDisplay, setToggleDisplay] = useState(false)

  const setToggle = () => {
    _setToggle(!toggle)
  }

  useEffect(() => {
    if (toggle) {
      setToggleDisplay(true)
    } else {
      setTimeout(() => {
        setToggleDisplay(false)
      }, 500)
    }
  }, [toggle])

  return { toggle, setToggle, toggleDisplay }
}

export default useToggle
