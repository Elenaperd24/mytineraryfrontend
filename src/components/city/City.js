import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvide";


import { useParams } from "react-router-dom";
import AttachMoney from "@mui/icons-material/AttachMoney";
import RememberMe from "@mui/icons-material/RememberMe";
import AirplanemodeActive from "@mui/icons-material/AirplanemodeActive";
import ActionAreaCard from "../home/ActionAreaCard";

function City() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    const [itineraries, setItineraries] = useState([])
    const { id } = useParams()
    const [{ cities }, dispatch] = useStateValue()
    let city = cities.filter(item => item._id === id)
    console.log(city)
    return (
        <>
            {city.map(item => {
                return (
                    <>
                        <div className=" relative w-10/12 mr-auto mr-l container mx-auto">

                            {/* text banner */}
                            <div className="absolute bottom-2  left-6 w-7/12 md:w-1/2  ">
                                {/* <h1 className="md:text-3xl sm:text-xl text-base	">Explore {item.name} with My Tineraray </h1> */}
                                {/* <p className="sm:text-base lg:text-xl text-sm ">Everithing what you need for your next vacations in {item.name} you will find in mytinerary.com</p> */}
                            </div>

                            {/* banner */}
                            <img className="realative top-0 rounded-lg" width={"100%"} src={process.env.PUBLIC_URL + `/image/cities/${item.name}/banner1.jpg`} />

                        </div>

                        {/* END HEADER */}

                        <div className=" bg-white rounded-lg shadow-md	container mx-auto relative p-8 mr-auto ml-auto w-4/6  -top-6 md:-top-20 sm:-top-8 md:w-9/12" >
                            <h1 className="text-center pb-8 md:text-3xl sm:text-xl text-base	">Explore {item.name} with My Tineraray </h1>

                            <div className="container mx-auto  md:flex md:flex-row md:justify-evenly md:items-center sm:flex sm:flex-col sm:items-center sm:hover:none sm:mb-1 ">
                                <div className="info-card md:w-52 mb-2	 sm:w-9/12">
                                    <p>Population: {item.population}</p>
                                    <img className="w-8"src={`${item.flag}`}/>

                                </div>
                                <div className="info-card mb-2 md:w-52	 sm:w-9/12">
                                    <p>Languages: {item.languages}</p>
                                    <img className="w-8"src={`${item.flag}`}/>

                                </div>
                                <div className="info-card mb-2 md:w-52	 sm:w-9/12">
                                    <p>Start Week: {item.starWeek}</p>
                                    <img className="w-8"src={`${item.flag}`}/>
                                </div>

                            </div>
                        </div>



                    </>
                )
            })}
        </>
    )

}
export default City;