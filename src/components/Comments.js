import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import swal from 'sweetalert'
import { useStateValue } from '../StateProvide';
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import { _url } from "./envairoment";


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

function Comments(props) {
    //funciones de MATERIAL UI
    const actions = [
        { icon: <ModeEditIcon />, name: 'Edit' },
        { icon: <DeleteForeverIcon />, name: 'Delete' }
    ];
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //FUNCIONALIDAD
    const [{ user }, dispatch] = useStateValue()
    //CONSTANTES SET   
    let date = ""
    const [comment, setComment] = useState()
    const [reload, setReload] = useState(false)
    const [edit, setEdit] = useState(true)
    const [changeComment, setChangeComment] = useState()
    useEffect(() => {   
        let id = props.itinerary
        axios.get(`${_url}api/comments/${id}`)
            .then(response => {
                setComment(response.data.response.comment)
            })

    }, [reload])

    //FUNCIONES
    const submitComent = async (event) => {
        event.preventDefault()      
        swal({
            title: "comment sent",
            icon: "success",
            buttons: "ok"
        })
        fecha()
        const dataComments = {
            intinerary: props.itinerary,
            user: user.datosUser.id,
            message: event.target[1].value,
            date: date
        }
        await axios.post(`${_url}api/comments", ${ dataComments }`)
            .then(response => {
                setComment(response.data.response.comment)
            })
        setReload(!reload)
    }


    const deleteEdit = async (id, name) => {    
        if (name === "Delete") {
        await axios.delete(`${_url}api/comments/${id}`)
                .then(response => setReload(!reload))
        }
        else if (name === "Edit") {
            setEdit(false)
        }

    }
    const inputText = (event) => {
        setChangeComment(event.target.value)  
    }
    const editComments = async (id) => {   
        fecha()
        let data = changeComment
        let newDate = date
        if (id !== "x") {
            await axios.put(`${_url}api/comments/${id}`, { data, newDate })
                .then(response => {
                    setEdit(true)
                    setReload(!reload)
                })
        }
        else {
            setEdit(true)
        }

    }


    function fecha() {
        var registro = new Date()
        var dia = registro.getDate()
        var mes = registro.getMonth() + 1
        var time = registro.getHours() + ":" + registro.getMinutes()
        var year = registro.getYear()
        date = dia + "/" + mes + "/" + year + " " + time
    }
    return (
        <>
            <h3 style={{ textDecoration: "none", color: "#ff6f6f", fontFamily: "Permanent Marker", textAlign: "center" }}>
                {comment?.length > 0 ? "know opinions of our users" :
                user?
                    <div>
                       <p>"Be the first to comment"</p>        
                      
                    </div>:
                    <div>
                    <p>"Be the first to comment"</p>          
                   <div>
                         <LinkRouter to="/signin" className="">
                             <div>
                                     <PersonIcon fontSize={"large"} />
                                     <h2>Sign in</h2>
                                 </div>
                             </LinkRouter>
                         </div>
                 </div>                    
                }
            </h3>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            {user? 
             <CardContent>                 
                   <form onSubmit={submitComent}>
                        <div>
                            <label for="exampleFormControlTextarea1" className="form-label"></label>
                            <div style={{ display: "flex", justifyContent: "right", margin: 0 }}>
                                <ExpandMore
                                    // expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ClearIcon style={{ color: "ff4a48" }} aria-expanded={expanded} />
                                </ExpandMore>
                            </div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ borderStyle: "solid", borderColor: "#ff4a48" }}></textarea>
                        </div>
                        <div style={{ display: "flex", justifyContent: "right" }}>
                            <div >
                                <ExpandMore
                                    // expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                   
                                >                                  
                                <Fab sx={{ bgcolor: "secondary" }} aria-label="SendIcon" aria-expanded={expanded}  type="submit"  >
                                    <SendIcon style={{ color: "ff4a48" }}/> 
                                </Fab>                               
                                </ExpandMore>
                            </div>
                        </div>
                    </form>
                </CardContent>:""}
            </Collapse>
            <div className={comment?.length > 0 ? "comments shadow" : "commentsA"}>
                {comment?.map((item) => {
                    return (
                        <Card sx={{ maxWidth: 390, margin: "6px" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} /* aria-label="recipe" */>
                                        {item.user.from !== "MyTineray" ?
                                            <img src={item.user.img} alt="login" />
                                            :
                                            item.user.img}
                                    </Avatar>
                                }
                                title={item.user.name.charAt(0).toUpperCase() + item.user.name.slice(1)}
                                subheader={item.date + "h" + " from " + item.user.from}

                            />
                            <CardContent>
                                {user?.datosUser.id === item.user._id ?
                                    edit ?
                                        <Typography variant="body2" color="text.secondary">
                                            {item.comments}
                                        </Typography> :
                                        <input variant="body2" color="text.secondary"
                                            defaultValue={item.comments}
                                            onChange={inputText}
                                            style={{ width: "100%", height: 70 }} >
                                        </input>
                                    : <Typography variant="body2" color="text.secondary">
                                        {item.comments}
                                    </Typography>
                                }
                            </CardContent>
                            {user?.datosUser.id === item.user._id ?
                                edit ?
                                    <Box sx={{ height: 40, transform: 'translateZ(0px)', flexGrow: 1 }}>
                                        <SpeedDial
                                            ariaLabel="SpeedDial"
                                            sx={{ position: 'absolute', bottom: 10, right: 5 }}
                                            icon={<MoreVertIcon />}
                                            direction="left"
                                        >
                                            {actions.map((action) => (
                                                <SpeedDialAction sx={{ bgcolor: "#ff4a48", color: "white" }}
                                                    key={action.name}
                                                    icon={action.icon}
                                                    tooltipTitle={action.name}
                                                    onClick={() => deleteEdit(item._id, action.name)}
                                                />
                                            ))}
                                        </SpeedDial>
                                    </Box> :
                                    <div>
                                        <ExpandMore
                                            // expand={expanded}
                                            //  onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="SendIcon"
                                            onClick={() => editComments("x")}
                                        >
                                            <ClearIcon style={{ color: "ff4a48" }} aria-expanded={expanded}  />
                                        </ExpandMore>

                                        <div style={{ display: "flex", justifyContent: "right", marginRight: "5px", marginBottom: "5px" }}>
                                            <Fab sx={{ bgcolor: "#7dd6e5", margin: "2px" }} aria-label="SendIcon" aria-expanded={expanded} onClick={() => editComments(item._id)}>
                                                <SendIcon />
                                            </Fab>
                                        </div>
                                    </div>
                                : ""
                            }
                        </Card>)
                })}
            </div >
            <CardActions>
                {user && !expanded ?
                    <ExpandMore
                        // expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Fab color="secondary" aria-label="CommentIcon" sx={{ bgcolor: "#ff4a48" }}>
                            <CommentIcon />
                        </Fab>
                    </ExpandMore> : ""}
            </CardActions>

        </>
    )
}
export default Comments;