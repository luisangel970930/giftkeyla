import Card from '../../components/Card'
import './home.css'
import Button from '../../components/Button'
import useDetail from '../../hooks/useDetail'

export default function Home() {
  const { detail, handleDetail } = useDetail()

  return (
    <>
      <div className="h-card">
        <Card
          img={detail.img}
          name={detail.name}
          paragraph={detail.paragraph}
        />
        <Button
          handleDetail={handleDetail}
          text={detail.id === 7 ? 'END' : 'NEXT'}
        ></Button>
      </div>
    </>
  )
}
