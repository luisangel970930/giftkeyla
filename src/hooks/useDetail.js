// import { useState } from 'react'

import { useState } from 'react'
import { DETAIL } from './datos'
import useRouter from './useRouter'

function useDetail() {
  const { pushLocation } = useRouter()
  const [count, setCount] = useState(0)

  const handleDetail = evt => {
    if (count === 6) {
      setCount(0)
      pushLocation('/')
    } else {
      evt.preventDefault()
      setCount(count + 1)
    }
  }

  const detail = DETAIL[count]

  return { detail, handleDetail }
}

export default useDetail
