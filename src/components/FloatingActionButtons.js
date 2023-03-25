import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link as LinkRouter } from "react-router-dom";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';



export default function FloatingActionButtons(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1.7 }, display: "flex", justifyContent: "center" }}>  
         <Fab variant="extended" color="secondary" >
        <LinkRouter to={`/city/${props.id}`} style={{ textDecoration: "none", color: "white" }}>
          Read More
        </LinkRouter>
      </Fab> 
    </Box>
  );
}