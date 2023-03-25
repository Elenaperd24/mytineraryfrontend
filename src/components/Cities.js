import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvide";
import CarouselHeader from "./CarouselHeader";
import FloatingActionButtons from "./FloatingActionButtons";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { accionType } from '../reducer'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import FavoriteIcon from '@mui/icons-material/Favorite';



const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));
const label = { inputProps: { 'aria-label': 'Switch demo' } };
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
            <CarouselHeader cities={cities} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                {continents.length > 1 ?
                    continents?.map((continent) => {
                        return (
                            <div>
                                <Switch {...label} color="secondary" defaultChecked onChange={selectContinent} name={continent} />
                                {continent}
                            </div>
                        )
                    })
                    :
                    <div>
                        <GreenSwitch {...label} onChange={selectContinent} name={"All continent"} />
                       Press to see all continent 
                        <div>
                            <h1 style={{ fontFamily: "Permanent Marker", color: "#ff4b4b", display: "flex", justifyContent: "center", marginTop: "2%" }}>
                                {continenteValue === "All continent" ? "" : continenteValue}
                            </h1>
                        </div>
                    </div>}

            </div>
            <div className='busquedaCity'>
                <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                        id="Country"
                        freeSolo
                        options={countries.map((option) => option)}
                        onKeyPress={filterCities}
                        onChange={filterCities}
                        renderInput={(params) => <TextField {...params} label="Country" color="success" focused onChange={filterCities} />}
                    />
                    <Autocomplete
                        freeSolo
                        id="City"
                        disableClearable
                        options={citiesNew.map((option) => option.name)}
                        onKeyPress={filterCities}
                        renderInput={(params) => (
                            <TextField {...params} label="Search City" placeholder="Name City" color="secondary" InputProps={{ ...params.InputProps, type: 'search', }}
                                onChange={filterCities}
                                onKeyPress={filterCities}
                                variant="standard"
                                focused
                            />
                        )}
                    />
                </Stack>
            </div>
            <div style={{ whidth: "100%", margin: "0", pading: "0", display: "flex", justifyContent: "center" }}>

                {/* Aqui comienzan mis cards Cities */}

                <div className="row cardsCities">
                    {citiesNew.length > 0 ?
                        citiesNew.map((city) => {
                            return (
                                <Card sx={{ maxWidth: 375, margin: "2vw", background: "#fff4ee", borderRadius: "15px"}} key={city._id}>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="settings">
                                                <LinkRouter key={city._id} to={`/city/${city._id}`}>
                                                <FavoriteIcon style={{color:"#7dd6e5"}}/>
                                                </LinkRouter>
                                              
                                            </IconButton>
                                        }
                                        title={city.name}
                                        subheader={city.country}
                                        style={{ color: "#ff4b4a", fontFamily: "Permanent Marker" }}
                                    />
                                    <div className="contenerdorInfoCity">
                                    <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "none"}}>
                                        <figure>
                                            <CardMedia className="imagen-card  img"
                                                component="img"
                                                height="194"
                                                image={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`}
                                                alt="Paella dish"
                                            />
                                            <div className="capa">
                                                <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "none", color: "#ff4b4a", fontFamily: "Permanent Marker" }}>
                                                    <h3>See More About This City</h3>
                                                </LinkRouter>
                                            </div>
                                        </figure>
                                         </LinkRouter>
                                    </div>

                                    <CardContent>
                                        <FloatingActionButtons id={city._id}/>
                                    </CardContent>
                                </Card>
                            )
                        }) : <h1 style={{ color: "#ff4b4b", display: "flex", justifyContent: "center", marginTop: "2%" }}>Sorry, no matches, please try again..</h1>}
                </div>
            </div >

        </>
    )
}
export default Cities;