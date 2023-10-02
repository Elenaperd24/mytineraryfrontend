import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect } from 'react';
import logo from "../image/logos/logoMyTinerary.png"
import logoNegro from "../image/logos/logoNegro.png"
import login from "../image/logos/login.png";
import { accionType } from '../reducer'
import { useStateValue } from '../StateProvide';
import axios from 'axios'
import swal from 'sweetalert'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { _url } from "./envairoment";


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(121, 209, 245) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

function Navbar() {
    //MterialUI DROPDOWN
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //constantes de componentes

    const [colorChange, setColorchange] = useState(false);
    const [colorLogo, setColorLogo] = useState(true);
    const [color, setColor] = useState("prueba");
    const [{ user }, dispatch] = useStateValue()
    async function cerrarSesion() {
        const email = user.datosUser.email
        await axios.post(`${_url}/api/signout", ${ email }`)
            .then(response => {
                if (response.data.success) {
                    swal({
                        title: response.data.response,
                        icon: "warning",
                        buttons: "ok"
                    })
                    localStorage.removeItem("token")
                    dispatch({
                        type: accionType.USERDB,
                        user: null
                    })
                }
            })
    }
    const changeNavbarColor = () => {
        if (window.scrollY > 50) {
            setColorchange(true);
            setColorLogo(false);
        }
        else {
            setColorchange(false);
            setColorLogo(true);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <nav className={colorChange ? "colorChange navbar shadow navbar-expand-md navbar-light  fixed-top " :
                "navbar navbar-expand-md  navbar-light fixed-top "}>
                <div className="container-fluid p-0">
                    {/* <LinkRouter to="/home">
                        <img src={colorLogo ? logo : logoNegro} className="navbar-brand logo img-fluid" alt="brand" />
                    </LinkRouter> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + color} id="navbarSupportedContent">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav ">
                            <li className="nav-item"  >
                                <LinkRouter to="/home" className="nav-link">
                                    <button className="btn btn-nav" >HOME</button>
                                </LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter to="/cities" className="nav-link">
                                    <button className="btn btn-nav" >CITIES</button>
                                </LinkRouter>
                            </li>
                            {!user ?
                                <li className="nav-item">
                                    <LinkRouter to="/signin" className=" ">
                                        <button className="btn btn-Login p-0 m-1 " ><img src={login} className="login" style={{ backgroundColor: "transparent", border: 'none', padding: 2, marginTop: 6, marginLeft: 4 }} alt="login" /></button>
                                    </LinkRouter>
                                </li> :

                                <div>
                                    <Button
                                        id="demo-customized-button"
                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        variant="contained"
                                        disableElevation
                                        onClick={handleClick}
                                        endIcon={<KeyboardArrowDownIcon />}
                                    >
                                        {user.datosUser.from !== "MyTineray" ?
                                            <img src={user.datosUser.img} className="login" style={{ backgroundColor: "transparent", borderRadius: '100px', borderStyle: "solid", borderColor: "#ff4b4b", padding: 2, marginTop: 6, marginLeft: 4 }} alt="login" />
                                            :
                                            <Avatar sx={{ bgcolor: red[500] }} style={{ padding: 2, marginTop: 6, marginLeft: 4 }}>
                                                {user.datosUser.img}
                                            </Avatar>
                                        }
                                    </Button>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'demo-customized-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={() => cerrarSesion()} disableRipple>
                                            <PersonOffIcon />
                                            Sign Out
                                        </MenuItem>
                                    </StyledMenu>
                                </div>}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar;