import Button from '../../components/Button'
import useRouter from '../../hooks/useRouter'
import Happy from '../../assets/Happy.png'
import Heart from '../../assets/Heart.png'
import './login.css'
function Login() {
  const { pushLocation } = useRouter()
  return (
    <>
      <div>
        <img src={Happy} alt="Happy Birthday" style={{ height: '200px' }} />
      </div>
      <div className="contenedor">
        <img
          className="heart"
          src={Heart}
          alt="Happy Birthday"
          style={{ height: '50px' }}
        ></img>
        <div className="centrado">
          <strong className="texto">K</strong>
        </div>
      </div>
      <div>
        <Button
          text="START"
          handleDetail={() => {
            pushLocation('/home')
          }}
        ></Button>
      </div>
    </>
  )
}

export default Login
