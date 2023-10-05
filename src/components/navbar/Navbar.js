import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect } from 'react';
import { accionType } from '../../reducer'
import { useStateValue } from '../../StateProvide';
import axios from 'axios'
import swal from 'sweetalert'
import "./navbar.css"
import { _url } from "../envairoment";




function Navbar() {
    
 
    const [{ user }, dispatch] = useStateValue()
    async function cerrarSesion() {
        const email = user.datosUser.email
        await axios.post(`${_url}/api/signout", ${ email }`)
            .then(response => {
                if (response.data.success) {
                    swal({
                        title: response.data.response,
                        icon: "warning",
                        buttons: "ok"
                    })
                    localStorage.removeItem("token")
                    dispatch({
                        type: accionType.USERDB,
                        user: null
                    })
                }
            })
    }

   
    return (
        <>
        <nav className="navbar-main">
            <img className="logo" src="https://s.latamairlines.com/icons/design-system/logos/panamericanos2023.svg"/>
            <ul>
             
                <li>Home</li>
                <li>Cities</li>               
                <li>Signin</li>
            </ul>

            
        </nav>
           
        </>
    )

}
export default Navbar;