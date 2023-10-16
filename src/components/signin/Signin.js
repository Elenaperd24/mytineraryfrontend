import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom"


import swal from 'sweetalert'
import { accionType } from '../../reducer'
import { useStateValue } from '../../StateProvide';
import { useEffect } from 'react';
import axios from "axios";
import { _url } from "../envairoment";
import PersonIcon from '@mui/icons-material/Person';



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

    const navigate = useNavigate();

    const backPage = () => {
        navigate("/")
    }


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
                console.log(response)
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
                backPage()
            })
    }
    return (
        <>

            <div className="bg-sky-950	">
                <br />
                <form onSubmit={signinUser} className="bg-white flex shadow-md rounded-md p-4 flex-col w-4/5 mr-auto ml-auto h-96	sm:w-3/6		md:w-1/5	justify-around	">
                    <div className="flex justify-center w-full">
                        <PersonIcon fontSize={"large"} />

                    </div>
                    <input className="border-solid	border-slate-300 border-2 rounded-md	" type="email" placeholder="Email" />
                    <input className="border-solid	border-slate-300 border-2 rounded-md	" type="password" placeholder="Password" />

                    <button className="bg-pink-500  text-white border-2 rounded-md" type=" submit">Log In</button>

                    <p className="text-center">Don't have an account? </p>
                    <LinkRouter className="text-center" to='/singup'>
                        <p className="underline	decoration-slate-50 text-cyan-500">SignUp</p>
                    </LinkRouter>
                </form>
                <br />
            </div>



        </>
    )
}
export default Signin;

