import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ListaImagenesCity(data) {

  const city = data.city

  const itemData = [
    {
      img: process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.banner2}`,
      title: 'Modern Infrastructure',
      author: '@myTinerary',
      featured: true,
    },
    {
      img: process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.infrastructure}`,
      title: 'Amazing landscapes',
      author: '@myTinerary',
    },
    {
      img: process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.gastronomy}`,
      title: 'Unique Gastronomy',
      author: '@myTinerary',
    },
    {
      img: process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.culture}`,
      title: 'Culture and heritage',
      author: '@myTinerary',
    },
    {
      img: process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.security}`,
      title: 'Safety and Quality of Life',
      author: '@myTinerary',
    },
    {
      img: process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.panorama}`,
      title: `Beautiful ${" "+ city[0].name}`,
      author: '@myTinerary',
      featured: true,
    },
    
  ];
  


  
  return (
      <div className='listaDeImagenesCity'>
    <ImageList
      sx={{
        width: "100vw",
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
  );
}

