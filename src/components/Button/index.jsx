import './button.css'
import { MdNavigateNext } from 'react-icons/md'

function Button({ handleDetail }) {
  return (
    <button onClick={handleDetail} className="h-button">
      Next <MdNavigateNext></MdNavigateNext>
    </button>
  )
}

export default Button
