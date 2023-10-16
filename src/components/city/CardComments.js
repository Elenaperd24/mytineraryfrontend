import React, { useState } from "react";
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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { _url } from '../envairoment';
import { useStateValue } from "../../StateProvide";
import { useEffect } from 'react';
import axios from "axios";
import { accionType } from '../../reducer';



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

export default function CardComments(props) {
    const [expanded, setExpanded] = React.useState(false);

    const [{ itineraries, comments }, dispatch] = useStateValue()

    let citytest = itineraries.filter(item=>{
       return item._id == props.props
    })

    const [comment, setComment] = useState()

    console.log(comments)

    // console.log("citytest",citytest[0].city)




    // console.log("comment", comment)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {comments?.map(item => {
                return (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }

                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              {item.comments}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                )
            })}
        </>
    );
}