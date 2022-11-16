import Card from '../../components/Card'
import './home.css'
import Button from '../../components/Button'
import useDetail from '../../hooks/useDetail'

export default function Home() {
  const { detail } = useDetail()

  return (
    <>
      <div className="h-card">
        <Card
          img={detail.img}
          name={detail.name}
          paragraph={detail.paragraph}
        />
        <Button></Button>
      </div>
    </>
  )
}
