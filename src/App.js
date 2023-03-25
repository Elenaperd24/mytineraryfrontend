import React from 'react' //IMPORTO PAQUETES DE REACT
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { accionType } from './reducer';
import { useStateValue } from './StateProvide';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import City from './components/City';
import SignUp from './components/SingUp';
import Signin from './components/Signin';
import axios from 'axios'
import Cities from "./components/Cities";
import swal from 'sweetalert'
import SigninPrueba from './components/Signinprueba';
import { _url } from './components/envairoment';

function App() {
  const [{ cities }, dispatch] = useStateValue()

  useEffect(() => {

    axios.get(`${_url}api/datos`)
      .then(response => {
        dispatch({
          type: accionType.CITIESDB,
          cities: response.data.response.cities
        })
      })

    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      axios.get(`${_url}api/signinToken`, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(user => {
          if (user.data.success) {
            swal({
              title: user.data.response,
              icon: "success",
              buttons: "ok"
            })
            dispatch({
              type: accionType.USERDB,
              user: user.data
            })
          }
          else {            
            localStorage.removeItem("token")
          }
        }
        )
    }

  }, [])




  /*      const dataItinerary = []                modo de consumir la data por axios no por dispatch
        axios.get("https://mytinerary-elena.herokuapp.com/api/infoitinerary")
          .then(response => dataItinerary.push(...response.data.response.itinerary))
          console.log(dataItinerary); */

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/_mytineraryfrontend/home" element={<Home />} />
        <Route path="/_mytineraryfrontend/cities" element={<Cities />} />
        <Route path="/_mytineraryfrontend/city/:id" element={<City />} />
        <Route path="/_mytineraryfrontend/signin" element={<Signin />} />
        <Route path="/_mytineraryfrontend/singup" element={<SignUp />} />
        <Route path="*" element={<Home />} />
        <Route path="/prueba" element={<SigninPrueba />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;