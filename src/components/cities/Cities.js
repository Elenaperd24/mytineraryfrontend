import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import axios from 'axios'
import { _url } from '../envairoment';


import { useStateValue } from "../../StateProvide";
import { accionType } from '../../reducer'
import { Checkbox, TextField } from "@mui/material";
import ActionAreaCard from "../home/ActionAreaCard";


import './cities.css'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function Cities() {
    //MIS DATOS DB   
    const [{ cities, citiesNew }, dispatch] = useStateValue()
    const [continenteValue, setContinenteValue] = useState("")
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: accionType.FILTER,
            citiesNew: cities
        })
    }, [])

    let newCities = []
    const handleContinent = (e) => {
       
        newCities = cities.filter((item) => item.continent.includes(e.target.value))
        dispatch({
            type: accionType.FILTER,
            citiesNew: newCities
        })
    }

    const handleCountry = (e) => {
       
        newCities = cities.filter((item) => item.country.includes(e.target.value))
        dispatch({
            type: accionType.FILTER,
            citiesNew: newCities
        })
    }
    const handleCity = (e) => {
       
        newCities = cities.filter((item) => item.name.includes(e.target.value))
        dispatch({
            type: accionType.FILTER,
            citiesNew: newCities
        })
    }
  
    return (
        <>

            {/* realative banner + text*/}
            <div className=" relative w-10/12 mr-auto mr-l container mx-auto">

                {/* text banner */}
                <div className="absolute sm:top-4 left-6 w-7/12 md:w-1/2  ">
                    <h1 className="md:text-3xl sm:text-xl text-base	">Fly around the world with My Tineraray </h1>
                    <p className="sm:text-base lg:text-xl text-sm ">Everithing what you need for your next vacations you will find in mytinerary.com</p>
                </div>

                {/* banner */}
                <img className="realative top-0" width={"100%"} src={process.env.PUBLIC_URL + `/image/cities/bannerCities.jpg`} />


            </div>

            {/* aditional information */}
            <div className=" container mx-auto relative p-0 mr-auto ml-auto w-4/6  -top-6 md:-top-20 sm:-top-8 md:w-9/12">
                <div className="flex flex-col w-full rounded-b-lg ">
                    <div className="rounded-t-lg bg-white md:w-1/3">
                        <ul className="flex justify-center	 md:justify-start" >
                            <li>Explore</li>

                            <li>Discover</li>

                            <li>Coment</li>
                        </ul>
                    </div>
                    <div className="w-full bg-white rounded-tr-lg " >

                        <div className="rounded-b-lg py-3.5 mb-3 shadow-md container mx-auto flex flex-col items-center sm:flex sm:flex-row items-center sm:justify-between">
                            <TextField onChange={handleContinent} className="text-field w-52 sm:w-full lg:w-56	md:w-28" id="outlined-basic" label="Continent" variant="outlined" />
                            <TextField onChange={handleCountry} className="text-field w-52 sm:w-full lg:w-56	md:w-28" id="outlined-basic" label="Country" variant="outlined" />
                            <TextField onChange={handleCity} className="city text-field w-52 sm:w-full lg:w-56	md:w-28" id="outlined-basic" label="City" variant="outlined" />
                            <div>
                                <button className="bg-pink-500 px-6  rounded-lg py-0.5 w-52 sm:w-full lg:w-28 md:w-32	h-11">Search</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            {/* end header */}
            {/* <Checkbox {...label} defaultChecked color="secondary" /> */}



            <div className="title-body">
                <h3 className="text-2xl">Travel Around The World</h3>
                <span><p>Enjoy - Travel - Explore</p></span>
            </div>

            <br />

            <div className="grid  grid-cols-1 w-4/5 mr-auto ml-auto sm:grid-cols-2 gap-2 md:grid-cols-3 md:grid-rows-3 ">


                {cities.length > 0 ? citiesNew.map((item) => {
                    return (<LinkRouter to={`/city/${item._id}`}>
                        <ActionAreaCard item={item} class_style={"max-w-sm realative	call-page hover:scale-110"} />
                    </LinkRouter>)
                }) : ""}



            </div>
            <br />

        </>
    )
}
export default Cities;