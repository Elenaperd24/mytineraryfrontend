import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvide";
import CitiesLike from "./CitiesLike"
import './home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PaginationCities from "./paginationCities";
import ActionAreaCard from "./ActionAreaCard";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [{ cities }, dispatch] = useStateValue()
    let morePopulation = cities.filter(city => city.population < 35)

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
                <img className="realative top-0 rounded-lg" width={"100%"} src={process.env.PUBLIC_URL + `/image/home/bannerHome.jpg`} />

            </div>



            {/* END HEADER */}

            <div className=" bg-white rounded-lg shadow-md	container mx-auto relative p-8 mr-auto ml-auto w-4/6  -top-6 md:-top-20 sm:-top-8 md:w-9/12" >
                <div className="container mx-auto  md:flex md:flex-row md:justify-evenly md:items-center sm:flex sm:flex-col sm:items-center sm:hover:none sm:mb-1 ">
                    <div className="info-card md:w-52 mb-2	 sm:w-9/12">
                        <p>The best prices</p>
                        <AttachMoneyIcon className='icon-card' fontSize="medium" />
                    </div>
                    <div className="info-card mb-2 md:w-52	 sm:w-9/12">
                        <p>The best memories</p>
                        <RememberMeIcon className='icon-card' fontSize="medium" />
                    </div>
                    <div className="info-card mb-2 md:w-52	 sm:w-9/12">
                        <p>The best destinations</p>
                        <AirplanemodeActiveIcon className='icon-card' fontSize="medium" />
                    </div>

                </div>
            </div>


            <br />

            <div className="title-body">
                <h3 className="text-2xl">Let's Travel The World</h3>
                <span><p>Enjoy - Travel - Explore</p></span>
            </div>
            <br />

            <div className="pagination container mx-auto">
                {cities.length > 0 ? <PaginationCities props={cities} /> : ""}
            </div>

            <br />

            <div className="title-body">
                <h3 className="text-2xl">Most Popular Cities</h3>
                <span><p>Enjoy - Travel - Explore</p></span>
            </div>
            <br />

            <div className="md:flex md:flex-row md:justify-center container mx-auto flex flex-col	items-center">

                {cities.length > 0 ? morePopulation.map((item) => {
                    return (<ActionAreaCard item={item} class_style={"max-w-xs hover:scale-125 inline-block"} />)
                }) : ""}

            </div>
            <br />
            <br />




        </>




    )

}
export default Home;