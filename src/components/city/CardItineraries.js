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

import AddCommentIcon from '@mui/icons-material/AddComment';

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


                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <AddCommentIcon />
                            </ExpandMore>
                        </CardActions>
                        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse> */}
                        <CardComments id={itinerary._id} />

                    </Card>
                )
            })}
        </>
    );
}
