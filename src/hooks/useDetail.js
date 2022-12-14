import { DETAIL } from './datos'
import useRouter from './useRouter'

function useDetail({ id = 0 }) {
  const { pushLocation } = useRouter()

  const handleDetail = () => {
    if (Number(id) === 6) {
      pushLocation('/')
    } else {
      pushLocation(`/home/${Number(id) + 1}`)
    }
  }

  const detail = DETAIL[id]

  return { detail, handleDetail }
}

export default useDetail
