import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvide";
import CitiesLike from "./CitiesLike"
import './home.css'

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [{ cities }, dispatch] = useStateValue()
    return (

        <>
            <div className="contentHero">

                <div className="bannerHome">
                    <img width={"100%"} src={process.env.PUBLIC_URL + `/image/home/bannerHome.jpg`} />
                    {/* <CitiesLike cities={cities}/> */}
                </div>
                <div className="text-banner">
                    <h1>Fly around the world with My Tineraray </h1>
                    <p>Everithing what you need for your next vacations you will find in mytinerary.com</p>
                </div>
                <div className="sub-menu">
                    <ul >
                        <li>Popular cities</li>
                        <li>Find your city</li>
                    </ul>
                </div>
            </div>
            <div className="content-filter">
                <ul>
                    <li>Continent</li>
                    <button></button>
                    <li>Country</li>
                    <button></button>
                    <li>Continent</li>
                    <button></button>
                </ul>
                <input placeholder="continent" />
                <input placeholder="country" />
                <input placeholder="city" />
            </div>
        </>




    )

}
export default Home;