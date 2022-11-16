// import { useState } from 'react'

import { useState } from 'react'
import { DETAIL } from './datos'

function useDetail() {
  const [count, setCount] = useState(0)

  const detail = DETAIL[count]

  return { detail, setCount, count }
}

export default useDetail
