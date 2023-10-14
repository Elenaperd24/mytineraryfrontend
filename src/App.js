import React from 'react' //IMPORTO PAQUETES DE REACT
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import { accionType } from './reducer';
import { useStateValue } from './StateProvide';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer"

import axios from 'axios'
import swal from 'sweetalert'
import { _url } from './components/envairoment';
import Cities from './components/cities/Cities';
import Signin from './components/signin/Signin';
import City from './components/city/City'


//import components 
import Home from './components/home/Home';

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
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/signin" element={<Signin />} />
         <Route path="/city/:id" element={<City />} />        
      {/* <Route path="/singup" element={<SignUp />} />
        <Route path="*" element={<Home />} /> */}

      </Routes>
      <Footer />
    </HashRouter>
  )
}
export default App;