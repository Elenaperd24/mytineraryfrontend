import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvide";
import { _url } from '../envairoment';
import axios from 'axios'
import { accionType } from '../../reducer';


import { useParams } from "react-router-dom";
import CardItineraries from "./CardItineraries";


function Itineraries(props) {
    const [{ itineraries, cities }, dispatch] = useStateValue()

    let namecity = itineraries.map(item => item.city)

    console.log(namecity)

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${_url}api/infoitinerary/${props.city}`)
            .then(response => {
                dispatch({
                    type: accionType.ITINIERARIES,
                    itineraries: response.data.response.itinerary
                })
            })
    }, [])



    return (
        <>
         {itineraries?.map(item=>{
           return( <CardItineraries id={item._id} city={item.city}/>)
         })}
        </>
    )

}
export default Itineraries;