import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect } from 'react';
import { accionType } from '../../reducer'
import { useStateValue } from '../../StateProvide';
import axios from 'axios'
import swal from 'sweetalert'
import "./navbar.css"
import { _url } from "../envairoment";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';




function Navbar() {
  

    const [{ user }, dispatch] = useStateValue()
    const [hideButton, sethideButton] = React.useState(true)
    const [iconUser, setIconuser] = React.useState(user)

    async function logOut() {
        const email = user.datosUser.email
        await axios.post(`${_url}api/signout`, {email})
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
                    setIconuser(user)
                }
            })
    }

    const handleButton = () => {
        sethideButton(!hideButton)
    }

    return (
        <>
            <nav className="navbar-main flex justify-around items-center sm:flex sm:justify-around sm:items-center  ">
                <img className="logo" src="https://s.latamairlines.com/icons/design-system/logos/panamericanos2023.svg" />
                <button className="p-2 w-14 sm:hidden" onClick={handleButton}>                   
                   <MenuIcon />
                    {/* <img className="w-14 sm:hidden " src='https://icon-library.com/images/hamburger-menu-icon-white/hamburger-menu-icon-white-18.jpg' /> */}
                </button>
                <ul className="hidden sm:flex justify-around items-center">
                    <LinkRouter to="/">
                        <li className="sm:block hidden">Home</li>
                    </LinkRouter>
                    <LinkRouter to="/cities">
                        <li className="sm:block hidden">Cities</li>
                    </LinkRouter>
                    {user?<button onClick={logOut}><LogoutIcon size={'large'}/></button>:  <LinkRouter to="/signin">
                        <li className="sm:block hidden">Signin</li>
                    </LinkRouter>}
                  

                </ul>
            </nav>
            <ul className={`navbar-main flex sm:hidden ${hideButton ? "hidden" : "flex"} justify-around items-center`}>
                <LinkRouter to="/">

                    <li className="">Home</li>
                </LinkRouter>
                <LinkRouter to="/cities">
                    <li className=" ">Cities</li>
                </LinkRouter>
                {user?<button onClick={logOut}><LogoutIcon size={'large'}/></button>:  <LinkRouter to="/signin">
                        <li className="sm:block hidden">Signin</li>
                    </LinkRouter>}
            </ul>

        </>
    )

}
export default Navbar;