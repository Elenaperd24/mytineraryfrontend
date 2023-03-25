import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import axios from 'axios'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import swal from 'sweetalert'
import { useStateValue } from '../StateProvide'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleCarouselHeader.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { _url } from "./envairoment";



function CarouselItinerario(props) {
  //responsive de MATERIAL UI
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 412 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 412, min: 0 },
      items: 1
    }
  };
  //START COMPONENTE
  let city = props.city
  const [{ user }, dispatch] = useStateValue()
  const [itineraries, setItineraries] = useState([])
  const [reload, setReload] = useState(false)
  const [colorLike, setColorLike] = useState()



  useEffect(() => {
    // window.scrollTo(0, 0);
    city.map(city =>
      axios.get(`${_url}api/infoitinerary/${city.name}`)
        .then(response => setItineraries(response.data.response.itinerary))
    )
  }, [reload])

  const Darlike = async (id) => {
    const token = localStorage.getItem("token")
    if (!token) {
      swal({
        title: "Go to sign in to post your opinions",
        icon: "error",
        buttons: "ok"
      })
    }
    else {
      axios.put(`${_url}api/likeDislike/${id}`, {},
        { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {
          console.log(response.data.response);
          if (response.data.response.includes(user.datosUser.id)) {
            //   setColorLike("colorLike")
          }
          setReload(!reload)
        })
    }
  }

console.log(itineraries);
  return (
    <>
      <Carousel responsive={responsive} className="carouselItinerario">
        {itineraries?.map((item) => {
          return (
            <div key={item._id} style={{ maxWidth: 450, backgroundColor: "red", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}>
              <Card key={item._id} sx={{ maxWidth: 450, background: "#fff4ee", position: "relative" }}>
           
              <Box sx={{ '& > :not(style)': { m: 0.5 }, display:"flex", justifyContent:"left"}}>
                      <Fab aria-label="like" onClick={() => Darlike(item._id)}>
                        <ThumbUpAltIcon className={user && item.likes.includes(user.datosUser.id) ?
                          "colorLike" : ""} /> {item.likes.length}
                      </Fab>
                    </Box>
            

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  style={{ paddingBottom: 0 }}
                >
                  <SwiperSlide style={{ height: 150, borderRadius: "15px" }}>
                    <img src={process.env.PUBLIC_URL + `/image/itinerary/itinerary${item.nroItinerario}/place1.jpg`} />
                  </SwiperSlide>

                  <SwiperSlide style={{ height: 150, borderRadius: "15px" }}>
                    <img src={process.env.PUBLIC_URL + `/image/itinerary/itinerary${item.nroItinerario}/place2.jpg`} />               
                  </SwiperSlide>

                  <SwiperSlide style={{ height: 150, borderRadius: "15px" }}>
                    <img src={process.env.PUBLIC_URL + `/image/itinerary/itinerary${item.nroItinerario}/place3.jpg`} />
                  </SwiperSlide>

                </Swiper>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* {item.descripcion} */}
                    <div><h5>{item.duracion + "h "} - {item.costo + " USD"}</h5></div>
                    <ul className="itemItinerario" >
                      <li className="nav-link" >{item.actividades.activity1.name}</li>
                      <li className="nav-link" >{item.actividades.activity2.name}</li>
                      <li className="nav-link" >{item.actividades.activity3.name}</li>
                    </ul>
                  </Typography>
                  <Comments itinerary={item._id} likes={item.likes} />
                </CardContent>
              </Card></div>)
        })}
      </Carousel>
    </>
  )
}
export default CarouselItinerario;