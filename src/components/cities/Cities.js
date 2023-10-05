import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvide";
import { accionType } from '../../reducer'





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

    let continents = []
    citiesNew.map((city) => {
        if (!continents.includes(city.continent)) {
            return (
                continents.push(city.continent)
            )
        }
    })

    let countries = []
    citiesNew.map((city) => {
        if (!countries.includes(city.country)) {
            return (
                countries.push(city.country)
            )
        }
    })

    function filterCities() {
        let textCity = document.getElementById("City").value.toLowerCase()
        let textCountry = document.getElementById("Country").value.toLowerCase()
        if (textCity !== "" || textCountry !== "") {
            let resultFilter = []
            if (continenteValue === "All continent" || continenteValue === "") {
                resultFilter = cities.filter(city =>
                    city.name.toLowerCase().includes(textCity) &&
                    city.country.toLowerCase().includes(textCountry))
            }
            else {
                resultFilter = cities.filter(city =>
                    city.continent === continenteValue &&
                    city.name.toLowerCase().includes(textCity) &&
                    city.country.toLowerCase().includes(textCountry))
            }
            dispatch({
                type: accionType.FILTER,
                citiesNew: resultFilter
            })
        }
        else {
            let resultFilter
            resultFilter = cities.filter(city => city.continent === continenteValue)
            if (resultFilter.length > 0) {
                dispatch({
                    type: accionType.FILTER,
                    citiesNew: resultFilter
                })
            }
            else {
                dispatch({
                    type: accionType.FILTER,
                    citiesNew: cities
                })
            }
        }
    }

    function selectContinent(event) {
        setContinenteValue(event.target.name)
        let resultFilter
        resultFilter = cities.filter(city => city.continent === event.target.name)
        dispatch({
            type: accionType.FILTER,
            citiesNew: resultFilter
        })
        if (event.target.name === "All continent") {
            dispatch({
                type: accionType.FILTER,
                citiesNew: cities
            })
        }
    }

    return (
        <>
          

        </>
    )
}
export default Cities;