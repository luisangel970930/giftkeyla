import * as React from 'react'
import CardM from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function Card({ img, paragraph, name }) {
  const imgId = `../public/img/${img}.jpg`

  return (
    <CardM style={{ background: '#f9f9f9be' }} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="345" image={imgId} alt="❤️🥳" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardM>
  )
}
