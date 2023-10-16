import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { _url } from '../envairoment';
import { useStateValue } from "../../StateProvide";
import { useEffect } from 'react';
import axios from "axios";
import { accionType } from '../../reducer';
import CardComments from './CardComments';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardItineraries(props) {
    const [expanded, setExpanded] = React.useState(false);

    const [itineraries, setItineraries] =React.useState()

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${_url}api/infoitinerary/${props.name}`)
            .then(response => {              

               setItineraries(response.data.response.itinerary)
            })


    }, [])




    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {itineraries?.map(itinerary => {
                return (
                    <Card sx={{ maxWidth: "100%" }}>
                        <CardHeader


                            title={`${itinerary.name}`}
                            subheader={`${itinerary.costo} $USD`}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={process.env.PUBLIC_URL + `/image/itinerary/itinerary${itinerary.nroItinerario}/place2.jpg`}
                            alt={itinerary.actividades.activity1.name}
                        />
                        <CardContent>
                            <Typography className="text-lg" color="text.secondary">
                                {itinerary.actividades.activity1.name}
                            </Typography>
                            <Typography className="text-lg" color="text.secondary">
                                {itinerary.actividades.activity2.name}
                            </Typography>
                            <Typography className="text-lg" color="text.secondary">
                                {itinerary.actividades.activity3.name}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>

                        </CardActions>
                      
                        <CardComments id={itinerary._id} />

                    </Card>
                )
            })}
        </>
    );
}
