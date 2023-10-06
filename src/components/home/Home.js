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
    return (

        <>
            {/* realative */}
            <div className="contentHero">
                {/* relative top0 */}
                <div className="bannerHome">
                    <img width={"100%"} src={process.env.PUBLIC_URL + `/image/home/bannerHome.jpg`} />
                    {/* <CitiesLike cities={cities}/> */}
                </div>
                {/* absolute top 0 */}
                <div className="text-banner">
                    <h1>Fly around the world with My Tineraray </h1>
                    <p>Everithing what you need for your next vacations you will find in mytinerary.com</p>
                </div>
                {/* relative top 0 */}
                <div className="sub-menu">
                    <ul >
                        <li>Know new places</li>

                        <li>See others opinions</li>

                        <li>Coment about your travel</li>
                    </ul>
                </div>

            </div>

            <div className="content-filter shadow-xl" >
                <div className="child-filter-content">
                    <ul >
                        <li>Continent</li>
                        <li> <ExpandMoreIcon fontSize="small" /></li>
                        <li>Country</li>
                        <li> <ExpandMoreIcon fontSize="small" /></li>
                        <li>City</li>
                        <li> <ExpandMoreIcon fontSize="small" /></li>
                    </ul>

                    <div className="input-filter">
                        <TextField className="text-field" id="outlined-basic" label="Continent" variant="outlined" />
                        <TextField id="outlined-basic" label="Country" variant="outlined" />
                        <TextField id="outlined-basic" label="City" variant="outlined" />
                        <button>Search</button>
                    </div>
                </div>

            </div>


        </>




    )

}
export default Home;