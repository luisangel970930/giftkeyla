import { useLocation } from 'wouter'

function useRouter() {
  // eslint-disable-next-line no-unused-vars
  const [_, pushLocation] = useLocation()
  return { pushLocation }
}

export default useRouter
