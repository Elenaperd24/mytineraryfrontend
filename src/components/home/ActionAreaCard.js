import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(item) {
 const city = item.item
 console.log(item)
  return (
    <Card className={`${item.class_style}` }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`}
          alt={city.name}
        />
      {
        item.class_style.includes("cities")?  <CardContent>
        {/* <Typography  variant="h5" component="div"> */}
        <h3 className='text-2xl'>
         {city.name}
         </h3>
        {/* </Typography> */}
        {/* <Typography variant="body2"> */}
        <p>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </p>
        {/* </Typography> */}
      </CardContent>: ""
      }
      </CardActionArea>
    </Card>
  );
}
