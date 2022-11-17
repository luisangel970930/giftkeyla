import './spinner.css'
import SVG from '../../assets/spinner.svg'

function Spinner() {
  return (
    <div>
      <img src={SVG} className="spinner" alt="Cargando.." />
    </div>
  )
}

export default Spinner
