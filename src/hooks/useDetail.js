// import { useState } from 'react'

const DETAIL = [
  {
    name: 'luis',
    img: 'https://res.cloudinary.com/ddoecu7re/image/upload/v1641766388/l34bmnx4qdsk2gxmxauf.jpg',
    id: 1,
    paragraph: 'asdasdasdasdasdasd',
  },
  {
    name: 'luisa',
    img: 'http:asdasdasd',
    id: 2,
    paragraph: 'asdasdasdasdasdasd',
  },
  {
    name: 'luisf',
    img: 'http:asdasdasd',
    id: 3,
    paragraph: 'asdasdasdasdasdasd',
  },
  {
    name: 'luisg',
    img: 'http:asdasdasd',
    id: 4,
    paragraph: 'asdasdasdasdasdasd',
  },
  {
    name: 'luish',
    img: 'http:asdasdasd',
    id: 5,
    paragraph: 'asdasdasdasdasdasd',
  },
]

function useDetail() {
  //  const [detail, setDetail] = useState({})

  return DETAIL[0]
}

export default useDetail
