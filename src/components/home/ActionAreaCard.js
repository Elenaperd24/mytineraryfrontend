import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(item) {
  const city = item.item
  console.log(city)
  return (
    <Card className={`${item.class_style}`}>
      <CardActionArea>
        {city.actividades ?
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + `/image/itinerary/itinerary${city.nroItinerario}/place3.jpg`}
            alt={city.city}
            key={city._id}
          /> :
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`}
            alt={city.name}
          />}


        {
          item.class_style.includes("cities") ? <CardContent>


            {!item.class_style.includes("call-page") ?
              <>
              <div className='text-theme'>
              <h2>{city.name}</h2>
                <p className="line-clamp-6">
                  <br/>
                  {city.descripcion.main}
                </p>
                </div>
              </> : <></>}



            {/* </Typography> */}
          </CardContent> : <h3 className={"text-2xl absolute bottom-0 text-center text-white mix-blend-screen	 bg-pink-400		 w-full hover:mix-blend-overlay"}>
            {city.name}
          </h3>
        }
      </CardActionArea>
    </Card>
  );
}
