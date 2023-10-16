import React from "react";

function CitiesLike(props) {
    const cities = props.cities

    let morePopulation = cities.filter(city => city.population < 35)
    return (
    
      <></>
    )
}
export default CitiesLike;