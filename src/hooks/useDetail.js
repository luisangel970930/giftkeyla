// import { useState } from 'react'

import { useState } from 'react'
import { DETAIL } from './datos'
import useRouter from './useRouter'

function useDetail() {
  const { pushLocation } = useRouter()

  const [count, setCount] = useState(0)

  const handleDetail = evt => {
    evt.preventDefault()
    setCount(count + 1)
  }
  if (count === 7) {
    setCount(0)
    pushLocation('/')
  }
  const detail = DETAIL[count]

  return { detail, handleDetail }
}

export default useDetail
