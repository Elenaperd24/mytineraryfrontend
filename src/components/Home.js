import React, { useEffect } from "react";
import { useStateValue } from "../StateProvide";
import banner from "../image/banner/pruebabanner.jpg";
import CitiesLike from "./CitiesLike"
import Carouselhome from './Carouselhome';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);    }, [])

    const [{ cities }, dispatch] = useStateValue()
    return (

        <div className="home">
            <img src={banner} className="baner-image w-100  d-flex justify-content-center aling-item-center" alt="banner" />
            <h1 className="d-flex txt-more-like">Cities more Like</h1>
            <CitiesLike cities={cities}/>
            <h1 className="d-flex txt-more-like">Let's Travel The World</h1>
            <Carouselhome cities={cities}/>          
        </div>

    )

}
export default Home;