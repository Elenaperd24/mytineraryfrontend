// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link as LinkRouter } from "react-router-dom";

export default function App(props) {
    let cities = props.cities
    return (
        <>
            {cities.length > 0 ?
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    /*    coverflowEffct={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }} */
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {cities.map((city) => {
                        return (
                            <>
                                <SwiperSlide key={`${city._id}+a`}>
                                    <div style={{ color: "#ff4b4b" }}>
                                    {city.name} - {city.country}
                                      
                                        <LinkRouter key={city._id} to={`/city/${city._id}`} style={{ textDecoration: "none", color: "#ff4b4a", fontFamily: "Permanent Marker" }}>
                                          <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`} alt={city.name} />
                                          Go to this city..
                                        </LinkRouter>                                       
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper> : ""}

        </>
    );
}
