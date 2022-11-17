import React, { Suspense } from 'react'

import './home.css'
import Button from '../../components/Button'
import useDetail from '../../hooks/useDetail'
import Spinner from '../../components/Spinner'

const Card = React.lazy(() => import('../../components/Card'))

export default function Home({ params }) {
  const { detail, handleDetail } = useDetail({ id: params.id })

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
