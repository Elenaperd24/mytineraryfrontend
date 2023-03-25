import React from "react";

function CitiesLike(props) {
    const cities = props.cities

    let morePopulation = cities.filter(city => city.population < 35)
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <div className="cards-like">
            <div className="container">
                <div className="row">
                    {morePopulation.map((city) => {
                        return (
                            <div key={city._id} className=" col-12 col-md-6 col-lg-4 col-xl-4" >
                                <div className="card item-card" >
                                    <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner1}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{city.name}</h5>
                                        <p className="card-text">{city.descripcion.population}</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}
export default CitiesLike;