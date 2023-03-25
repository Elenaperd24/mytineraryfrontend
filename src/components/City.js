import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvide";
import ListaImagenesCity from "./ListaImagenesCity"
import CarouselItinerario from "./CarouselItinerario";

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
            {city.length > 0 ?
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/image/cities/${city[0].name}/${city[0].images.banner1}`} className="baner-image w-100 bannerCity d-flex justify-content-center aling-item-center" alt="..." />
                       {/*  <div>
                            <div className="NameCity" style={{ fontFamily: "Permanent Marker" }} >{city[0].name}</div>
                        </div> */}
                    </div>
                    <div className="nameCountry"style={{fontFamily: "Permanent Marker" }}>
                            {city[0].name}
                        </div>
                    <div className="d-flex contInfoImportant container">
                        <div className="row">
                            <div className="card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Idiom</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{city[0].languages}</h6>
                                    <div className="foto-usuario d-flex">
                                        <img src={city[0].flag} className="card-img-top foto-usuario" alt="..." />
                                    </div>
                             {/*        <p className="card-text info">{city[0].descripcion.language}</p> */}
                                </div>
                            </div>
                            <div className="card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Population and territory</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">+{city[0].population + " "} M</h6>
                                    <div className="foto-usuario d-flex">
                                        <img src={city[0].flag} className="card-img-top foto-usuario" alt="..." />
                                    </div>
                                  {/*   <p className="card-text info">{city[0].descripcion.population}</p> */}
                                </div>
                            </div>
                            <div className=" card info shadow col-12 col-md-6 col-lg-4 col-xl-4" style={{ width: "19rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Weather</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
                                    <div className="foto-usuario d-flex">
                                        <img src={city[0].flag} className="card-img-top foto-usuario" alt="..." />
                                    </div>
                                    {/* <p className="card-text info ">{city[0].descripcion.weather}</p> */}
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    
                    {/* <div className="d-flex informacionPrincipal">
                        <div className="nameCountry ">
                            <h1>{city[0].name}</h1>
                        </div>
                        <div className="descripcionCity shadow">
                            <h5>{city[0].descripcion.main}
                            </h5>
                        </div>
                    </div> */}
                    <div className="importantInformation">
                        <h1>Look at the itineraries</h1>
                        <h1>that you are going to love</h1>
                    </div>
                    <CarouselItinerario /* itineraries={itineraries} */ city={city} />
                    <div className="whyCity container">
                        <h3>Why choose </h3>
                        <h1>{city[0].name + " "} as a destination?</h1>
                    </div>
                    <ListaImagenesCity city={city} />               
                </div> : ""}
        </>
    )

}
export default City;