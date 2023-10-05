import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvide";


import { useParams } from "react-router-dom";

function City() {
    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [])
    const [itineraries, setItineraries] = useState([])
    const { id } = useParams()
    const [{ cities }, dispatch] = useStateValue()
    let city = cities.filter(item => item._id === id)

    return (
        <>
          
        </>
    )

}
export default City;