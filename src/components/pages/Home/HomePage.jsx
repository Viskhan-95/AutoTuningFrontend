import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../features/services/servicesSlice";
import LearnMore from "../Learn-More/LearnMore";
import Car from "../../Car/Car";
import Features from "../WeFeatures/Features";
import Navibar from "../../Layout/Navibar/Navibar";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./Home.module.css";

const HomePage = () => {
  const services = useSelector((state) => state.services.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const itemsServices = services.map((service, index) => {
    return (
      <div className={styles.slider} date-value={index}>
        <div className={styles.slider_content}>
          <div className={styles.slider_title}>{service.title}</div>
          <div className={styles.slider_text}>{service.text}</div>
          <Link to={`/service/${service._id}`}>
            <button className={styles.slider_btn}>Подробнее</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      {Navibar(100)}

      <Container
        style={{
          position: "absolute",
          color: "white",
          fontSize: "30px",
          width: "50%",
          marginTop: "-540px",
          marginLeft: "152px",
        }}
      >
        <div className={styles.welcome_title}>
          <h1>
            BROOKLYN <br></br>AUTOMOBILE <br></br> STUDIO
          </h1>
        </div>          
      </Container>
      <Container
        style={{
          width: "80%",
          backgroundColor: "transparent",
          marginTop: "-150px",
        }}
      >
        <AliceCarousel
          mouseTracking
          items={itemsServices}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay="true"
          autoPlayInterval="4000"
          autoPlayStrategy="default"
          disableDotsControls="false"
          infinite="true"
          animationType="fadeout"
        />
      </Container>
      <Car />
      <Features />
      <LearnMore />
      <Footer />
    </>
  );
};
export default HomePage;
