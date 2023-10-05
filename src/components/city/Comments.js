import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';

import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

import swal from 'sweetalert'
import { useStateValue } from '../../StateProvide';
import axios from "axios";

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { _url } from "../envairoment";



function Comments(props) {



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
           

        </>
    )
}
export default Comments;