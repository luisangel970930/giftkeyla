import './button.css'
import { MdNavigateNext } from 'react-icons/md'

function Button({ handleDetail, text }) {
  return (
    <>
      <button onClick={handleDetail} className="h-button">
        {text}{' '}
        {text === 'START' ? (
          <strong>🥳🎉</strong>
        ) : (
          <MdNavigateNext></MdNavigateNext>
        )}
      </button>
    </>
  )
}

export default Button
