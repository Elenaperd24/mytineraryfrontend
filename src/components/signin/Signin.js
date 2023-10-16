import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

import swal from 'sweetalert'
import { accionType } from '../../reducer'
import { useStateValue } from '../../StateProvide';
import { useEffect } from 'react';
import axios from "axios";
import { _url } from "../envairoment";



function Signin() {
    const [{ user }, dispatch] = useStateValue()
    useEffect(() => {
        window.scrollTo(0, 0);
       
    }, [])

    const responseGoogle = (response) => {
        const UserData = {
            email: response.profileObj.email,
            password: response.googleId + "Ep",
        }
        detectFrom(UserData)
    }
 /*    const responseFacebook = async (response) => {
       
        const UserData = {
            email: response.email,
            password: response.id + "Ep",
        }
        detectFrom(UserData)
    } */

    async function signinUser(event) {
        event.preventDefault()
        const UserData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }
        detectFrom(UserData)
    }

    async function detectFrom(UserData) {
        await axios.post(`${_url}api/signin`, { UserData })
            .then(response => {
                if (response.data.success === false) {
                    swal({
                        title: "error",
                        icon: "error",
                        text: response.data.error,
                        buttons: "ok"
                    })
                }
                else if (response.data.success === true) {
                    localStorage.setItem("token", response.data.response.token)
                    swal({
                        title: "Login....",
                        icon: "success",
                        text: "You have started sesion",
                        buttons: "ok"
                    })
                }
                dispatch({
                    type: accionType.USERDB,
                    user: response.data.response
                })
            })
    }
    return (
        <>
      
        </>
    )
}
export default Signin;

