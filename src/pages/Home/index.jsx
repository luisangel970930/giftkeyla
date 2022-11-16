import Card from '../../components/Card'
import './home.css'
import Button from '../../components/Button'
import useDetail from '../../hooks/useDetail'
export default function Home() {
  return (
    <>
      <div className="h-card">
        <Card
          img={useDetail().img}
          name={useDetail().name}
          paragraph={useDetail().paragraph}
        />
        <Button></Button>
      </div>
    </>
  )
}
