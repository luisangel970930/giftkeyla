import Button from '../../components/Button'
import useRouter from '../../hooks/useRouter'
function Login() {
  const { pushLocation } = useRouter()
  return (
    <>
      <Button
        text="START"
        handleDetail={() => {
          pushLocation('/home')
        }}
      ></Button>
    </>
  )
}

export default Login
