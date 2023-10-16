import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import swal from 'sweetalert'
import axios from "axios";
import { _url } from "../envairoment";
import PersonIcon from '@mui/icons-material/Person';



//<MaterialIcon className="icon-login" icon="account_circle" size='large' color="black" />//

//<img src={login} className="login" alt="login" />//

function SignUp() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const responseGoogle = async (response) => {

        const NuevoUsuario = {
            img: response.profileObj.imageUrl,
            name: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.googleId + "Ep",
            from: "Google"
        }
        detectFrom(NuevoUsuario)
    }

    /*     const responseFacebook = async (response) => {
              const NuevoUsuario = {
                img: response.picture.data.url,
                name: response.name,
                lastName: response.lastName,
                email: response.email,
                password: response.id + "Ep",
                from: "Facebook"
            }
            detectFrom(NuevoUsuario)
        } */
    async function newUser(event) {
        event.preventDefault()
        let name = event.target[0].value
        let lastName = event.target[1].value
        let iniciales = name.charAt(0) + lastName.charAt(0)
        const NuevoUsuario = {
            img: iniciales.toUpperCase(),
            name: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            from: "MyTineray"
        }
        console.log(NuevoUsuario)
        detectFrom(NuevoUsuario)
    }


    async function detectFrom(NuevoUsuario) {
        await axios.post(`${_url}api/signup`, { NuevoUsuario })  
            .then(response => {
                if (response.data.success === "falseVAL") {
                    let detailsError = response.data.response.error.details

                    detailsError.map(error =>
                        swal({
                            title: " error",
                            icon: "error",
                            text: error.message,
                            buttons: "ok"
                        }))
                }
                else if (response.data.success === true) {

                    swal({
                        title: " Login...",
                        icon: "success",
                        text: response.data.response,
                        buttons: "ok"
                    })
                }
                else {

                    swal({
                        title: response.data.response,
                        icon: "warning",
                        buttons: "ok"
                    })
                }
            }
            )







    }



    return (
        <>

            <div className="bg-sky-950	">
                <br />
                <form onSubmit={newUser} className="bg-white flex shadow-md rounded-md p-4 flex-col w-4/5 mr-auto ml-auto h-96	sm:w-3/6		md:w-1/5	justify-around	">
                    <div className="flex justify-center w-full">
                        <PersonIcon fontSize={"large"} />

                    </div>
                    <input className="border-solid	border-slate-300 border-2 rounded-md" type="name" placeholder="Name" />
                    <input className="border-solid	border-slate-300 border-2 rounded-md" type="name" placeholder="Last Name" />
                    <input className="border-solid	border-slate-300 border-2 rounded-md" type="email" placeholder="Email" />
                    <input className="border-solid	border-slate-300 border-2 rounded-md" type="password" placeholder="Password" />
                    <button className="bg-pink-500  text-white border-2 rounded-md" type=" submit">Submit</button>
                    {/* <p className="text-center">Go back Log In</p> */}
                    <LinkRouter className="text-center" to='/signin'>
                        <p className="underline	decoration-slate-50 text-cyan-500">Sign In</p>
                    </LinkRouter>
                </form>
                <br />
            </div>

        </>
    )
}
export default SignUp;



