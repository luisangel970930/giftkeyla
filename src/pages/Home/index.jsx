import React, { Suspense } from 'react'

import './home.css'
import useDetail from '../../hooks/useDetail'
import Spinner from '../../components/Spinner'
import useRouter from '../../hooks/useRouter'

const Card = React.lazy(() => import('../../components/Card'))
const Button = React.lazy(() => import('../../components/Button'))

export default function Home({ params }) {
  const { detail, handleDetail } = useDetail({ id: params.id })
  const { pushLocation } = useRouter()

  if (params.id === undefined || params.id === null) {
    pushLocation('/')
  }
  return (
    <>
      {detail !== undefined && (
        <div className="h-card">
          <Suspense fallback={<Spinner></Spinner>}>
            <Card
              img={detail.img}
              name={detail.name}
              paragraph={detail.paragraph}
            />
            <Button
              handleDetail={handleDetail}
              text={detail.id === 7 ? 'END' : 'NEXT'}
            ></Button>
          </Suspense>
        </div>
      )}
    </>
  )
}
