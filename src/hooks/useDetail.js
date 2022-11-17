// import { useState } from 'react'

import { useState } from 'react'
import { DETAIL } from './datos'

function useDetail() {
  const [count, setCount] = useState(0)

  const handleDetail = evt => {
    evt.preventDefault()
    setCount(count + 1)
  }

  const detail = DETAIL[count]

  return { detail, handleDetail }
}

export default useDetail
