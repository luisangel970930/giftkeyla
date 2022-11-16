import Card from '../../components/Card'
import './home.css'
import Button from '../../components/Button'
export default function Home() {
  const num = 1
  const sentences =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati praesentium recusandae molestiae alias magnam iure sequi dolor quidem explicabo? Explicabo tempore natus culpa animi rem!'

  return (
    <>
      <div className="h-card">
        <Card img={num} name={'luisange'} paragraph={sentences} />
        <Button></Button>
      </div>
    </>
  )
}
