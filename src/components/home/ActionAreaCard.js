import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(item) {
  const city = item.item
  return (
    <Card className={`${item.class_style}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`}
          alt={city.name}
        />
        {
          item.class_style.includes("cities") ? <CardContent>

            {/* <h3 className={`text-2xl ${item.class_style.includes("cities-page")?"absolute top-2/4 text-center	text-white	w-full":""}`}>
              {city.name}
            </h3> */}
            {/* <Typography variant="body2"> */}
            {!item.class_style.includes("call-page") ? <p>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </p> : <></>}

            {/* </Typography> */}
          </CardContent> : <h3 className={"text-2xl absolute bottom-0 text-center text-white mix-blend-screen	 bg-pink-400		 w-full hover:mix-blend-overlay"}>
            {city.name}
          </h3>
        }
      </CardActionArea>
    </Card>
  );
}
