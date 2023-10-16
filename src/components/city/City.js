import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvide";
import { _url } from '../envairoment';
import axios from 'axios'
import { accionType } from '../../reducer';


import { useParams } from "react-router-dom";
import CardItineraries from "./CardItineraries";


function City() {
    const [{ cities, itineraries }, dispatch] = useStateValue()
    const { id } = useParams()
    let city = cities.filter(item => item._id === id)
    let namecity = city.map(item => item.name)

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`${_url}api/infoitinerary/${namecity[0]}`)
            .then(response => {
                dispatch({
                    type: accionType.ITINIERARIES,
                    itineraries: response.data.response.itinerary
                })

            })


    }, [])

    console.log(itineraries)

    return (
        <>
            {cities.length > 0 ? city.map(item => {
                return (
                    <>
                        <div className=" relative w-10/12 mr-auto mr-l container mx-auto">

                            {/* text banner */}
                            <div className="absolute bottom-2  left-6 w-7/12 md:w-1/2  ">
                                {/* <h1 className="md:text-3xl sm:text-xl text-base	">Explore {item.name} with My Tineraray </h1> */}
                                {/* <p className="sm:text-base lg:text-xl text-sm ">Everithing what you need for your next vacations in {item.name} you will find in mytinerary.com</p> */}
                            </div>

                            {/* banner */}
                            <img className="realative top-0 rounded-lg" width={"100%"} src={process.env.PUBLIC_URL + `/image/cities/${item.name}/Banner1.jpg`} />

                        </div>

                        {/* END HEADER */}

                        <div className=" bg-white rounded-lg shadow-md	container mx-auto relative p-8 mr-auto ml-auto w-4/6  -top-6 md:-top-20 sm:-top-8 md:w-9/12" >
                            <h1 className="textCity text-center pb-8 md:text-3xl sm:text-xl text-base	">{item.name} </h1>

                            <div className="container mx-auto  md:flex md:flex-row md:justify-evenly md:items-center sm:flex sm:flex-col sm:items-center sm:hover:none sm:mb-1 ">
                                <div className="textCity info-card flex flex-col mb-2 md:w-52 sm:flex sm:flex-row  sm:w-9/12">
                                    <p>Population: {item.population}</p>
                                    <img className="w-8" src={`${item.flag}`} />

                                </div>
                                <div className="textCity info-card flex flex-col mb-2 md:w-52 sm:flex sm:flex-row  sm:w-9/12">
                                    <p>Languages: {item.languages}</p>
                                    <img className="w-8" src={`${item.flag}`} />

                                </div>
                                <div className="textCity info-card flex flex-col mb-2 sm:w-52 sm:flex sm:flex-row m:w-9/12">
                                    <p>Start Week: {item.starWeek}</p>
                                    <img className="w-8" src={`${item.flag}`} />
                                </div>

                            </div>
                        </div>
                        <div className="w-4/5 mr-auto ml-auto grid grid-cols-1 gap-4">
                            {itineraries.length > 0 ? itineraries.map(item => {
                                return (
                                    <CardItineraries item={item} />
                                )
                            }) : ""}
                        </div>

                            <br />

                    </>
                )
            }) : ""}
        </>
    )

}
export default City;