import './button.css'
import { MdNavigateNext } from 'react-icons/md'
import useDetail from '../../hooks/useDetail'

function Button() {
  const { setCount } = useDetail()

  const handleDetail = evt => {
    evt.preventDefault()
    setCount(1)
  }

  return (
    <button onClick={handleDetail} className="h-button">
      Next <MdNavigateNext></MdNavigateNext>
    </button>
  )
}

export default Button
